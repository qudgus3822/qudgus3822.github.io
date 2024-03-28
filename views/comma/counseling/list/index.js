import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { IconButton } from 'components/buttons';
import { BookImage } from 'components/book';
import {
  Container as ContainerBase,
  SwrContainer,
} from 'components/containers';
import { MainLayout } from 'components/layouts';
import { CommaMainLayout } from "components/layouts/CommaMainLayout";
import { MediumDisplay2, LightGray13, Title } from 'components/texts';
import { getEllipsis } from 'utilities/getStyles';
import { useRouter } from 'next/router';
import { HybridLink } from 'components/HybridLink';
import { Center } from 'components/layouts';
import InfiniteScroll from "react-infinite-scroll-component";
import Cookie from 'universal-cookie/lib';
import { detectTablet } from 'helpers/common';
import { Category } from './components/Category';



export default function CounselingListView(authResult) {
  const router = useRouter();

  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [dataSet, setdataSet] = useState(false);
  const [startNo, setStartNo] = useState(0);
  const [nowPaging, setNowPaging] = useState(0);
  const [isTablet, setIsTablet] = useState(false);

  const { categoryno} = router.query;
  
  const [title, setTitle] = useState('');
  // 데이터 받아오기
  const onSearchData = () => {
    //fetch(`/api/library/book-map-detail?bookmapno=${bookmapno}&startNo=${startNo}&nowPaging=${nowPaging}`)
      const data = require('/public/data/counseling/list/list.json').datas;    
      console.log(data);
      setData(data);
      setdataSet(true);       
      findcategory();
  }

  // 무한스크롤 다음 데이터 받기
  const update = () => {
    // onSearchData();
  }
  
  useEffect(() => {
    setIsTablet(detectTablet());
    setNowPaging(0);
    onSearchData();
  }, []);
  
  const findcategory = ()=>{
    var dataset = require('/public/data/counseling/list/list.json').Category;
    dataset.forEach((item)=>{
      if(item.id==categoryno){
        console.log(item.title.toString());
        setTitle(item.title.toString());
        
      }
    }

    )
  };
  return (
    
    <CommaMainLayout>
      <Container>
        <BackButtonWrap className={'pc_only'}>
          {/* <IconButton size={24} src="/images/btn-back-1.svg" onClick={() => { router.back() }} /> */}
          <IconButton size={24} src="/images/btn-back-1.svg" onClick={() => { location.href = "/store/map" }} />
        </BackButtonWrap>
        <SwrContainer data={dataSet} error={error}>
          {(data) && (
            <>
              {(data?.length > 0) ? (
                <InfiniteScroll
                  style={{ overflow: 'initial' }}
                  dataLength={data?.length != undefined ? data?.length : 0}
                  next={update}
                  hasMore={true}
                  loader={<h3></h3>}
                  endMessage={<h4></h4>}
                  scrollThreshold={0.6}
                >
                  {/* 기존 코드 */}
                  {/* <Headline>{bookmapno == 0 ? '전체보기' : data[0]?.bookMapName}</Headline> */}

                  {/* 추가 코드 */}
                  <HeadlineWrap>
                    {/* <Headline>{bookmapno == 0 ? '전체보기' : data[0]?.bookMapName}</Headline>
                    <Category bookMapName={bookmapno == 0 ? '전체보기' : data[0]?.bookMapName}/> */}
                    <Headline>{title}</Headline>
                    <Category categoryName={title}/>
                  </HeadlineWrap>
                  {/* 추가 코드 */}

                  <BookItemList isTablet={isTablet}>
                    {categoryno=="0"? data.map(x => (
                      <li key={x.id}>{BookItem({ data: x })} </li>
                    )):
                    data.map(x => (
                      x.category==categoryno ? <li key={x.id}>{BookItem({ data: x })} </li>:<></>
                    ))}
                  </BookItemList>
                </InfiniteScroll>
              ) : (
                <Center height={200} mbAlign="center" mbHeight="100vh">
                  등록된 상담이 없습니다.
                </Center>
              )}
            </>
          )}
        </SwrContainer>
      </Container>
    </CommaMainLayout>
  );
}


const MainLayout2 = styled(MainLayout)`
  ${({ theme }) =>
    theme.media.under_tablet(`
    margin-bottom: 180px;
  `)}
`;
const Container = styled(ContainerBase)`
  padding-top: 60px;
  padding-bottom: 120px;
  ${({ theme }) =>
    theme.media.under_tablet(`
    padding-top: 16px;
    padding-bottom: 100px;
  `)}
`;
const Headline = styled(MediumDisplay2)`
  margin-top: 22px;
  ${({ theme }) =>
    theme.media.under_tablet(`
    margin-top:20px;
  `)}
`;


const BookItemList = styled.ul`
  
  margin-top: 46px;
  align-items: end;
  ${({ theme, isTablet }) => !isTablet ?
    theme.media.under_tablet(`
    grid-gap: 30px 10px;
    grid-template-columns: repeat(auto-fill, 100px);
    justify-content: space-around;
    margin-top: 20px;
  `) : theme.media.under_tablet(`
    grid-gap: 30px 10px;
    grid-template-columns: repeat(5, 100px);
    justify-content: space-around;
    margin-top: 20px;
  `)}
`;
const BookItemComponent = styled.div`
margin-bottom : 10px;
`;
const Author = styled(LightGray13)`
  display: flex;
  align-items: center;
  margin-top: 4px;
  font-weight: 500;
  > span {
    ${getEllipsis(1, 1.2)}
  }
  > i {
    line-height: 1.2;
    white-space: nowrap;
  }
  ${({ theme }) =>
    theme.media.under_tablet(`
    font-weight: 400;
    font-size:11px;
  `)}
`;

const BackButtonWrap = styled.div`
`;

const BookItem = ({ data }) => {
  const cookie = new Cookie();
  const router = useRouter();

  const Inappmode = router.asPath.includes('Inappmode');

  return (
    <BookItemComponent>
      
      <HybridLink href={data.id=="1"?`/counseling/detail?contentid=${data.id}&title=심리상담`:``} >
        <a>
          <RowWrap>  
            <div className='left'>  
              <BookImage
                className="pc_only"
                hasPdf={data.type?.ebook}
                hasAudiobook={data.bookType?.audio}
                width={175}
                alt={data.title}
                src={data.image}
                type={data.type}

                labelSize="small"
              />
              <BookImage
                className="mb_only"
                hasPdf={data.bookType?.ebook}
                hasAudiobook={data.bookType?.audio}
                width={100}
                height={143}
                alt={data.title}
                src={data.image}
                type={data.type}

                labelSize="small"
              />
            </div>  
            <Divrigt>  
              <Title2>{data.name}</Title2>
              <Author>
                {<><span>{data.author}</span>&nbsp;<i>지음</i></>}
              </Author>
              
            {data.star && data.star != "0" ? <Star>★{data.star} ({data.count})</Star> : <Star>new</Star>}
            </Divrigt>  
          </RowWrap>
        </a>
      </HybridLink>
      
    </BookItemComponent>
  );
};
const Title2 = styled.div`
width:150px
margin-left : 20px
float : left
`
const Divrigt = styled.div`

margin-left : 20px;
margin-top : 20px;
`
// Headline과 셀렉트박스의 배치를 위해
const HeadlineWrap = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 10;

  ${({ theme }) =>
    theme.media.under_tablet(`
    flex-direction: column;
  `)}
`;
const RowWrap = styled.div`
display: flex;
flex-direction: row;
`;
const Star = styled(LightGray13)`
  margin-top: 5px;
  font-weight: 400;
`;
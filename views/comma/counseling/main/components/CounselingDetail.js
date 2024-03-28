import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { IconButton } from 'components/buttons';
import { DetailImage } from 'components/counseling';
import {
  Container as ContainerBase,
  SwrContainer,
} from 'components/containers';
import { MainLayout } from 'components/layouts';
import { Display2WithLink ,MediumDisplay2, LightGray13, Title, DarkGray13 } from 'components/texts';
import { getEllipsis } from 'utilities/getStyles';
import { useRouter } from 'next/router';
import { HybridLink } from 'components/HybridLink';

import InfiniteScroll from "react-infinite-scroll-component";
import Cookie from 'universal-cookie/lib';
import { detectTablet } from 'helpers/common';

type CounselingDetailgrops = {
  data: any
};

export const CounselingDetail= ({}: CounselingDetailgrops) => {
  const router = useRouter();

  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [dataSet, setdataSet] = useState(false);
  const [startNo, setStartNo] = useState(0);
  const [nowPaging, setNowPaging] = useState(0);
  const [isTablet, setIsTablet] = useState(false);

  const { bookmapno, name } = router.query;
  const PublishNo = 0  //  홍성사로 하게 되면. . 10003   이값만 있으면 출판사 전체를..  필수 
  const BrandNo = 0  // 1015   해당 브랜드로만 추출이 필요할 경우 5-> 쉬는시간 도서 6->쉬는시간 출판사 중 별도브랜드

  // 데이터 받아오기
  const onSearchData = () => {
    const data = require('/public/data/counseling/main/detail.json');    
      setData(data);
      setdataSet(true);        
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

  return (
    
      <Container>
        <Display2WithLink href={`/counseling/list?categoryno=0&title=상담 분야`}>{"상담 분야"}</Display2WithLink>
        {/* <Display2WithLink href={`${titleLink}`}>{"상담 분야"}</Display2WithLink> */}
        <BackButtonWrap className={'pc_only'}>
          {/* <IconButton size={24} src="/images/btn-back-1.svg" onClick={() => { router.back() }} /> */}
          <IconButton size={24} src="/images/btn-back-1.svg" />
        </BackButtonWrap>
        <SwrContainer data={dataSet} error={error}>
          <InfiniteScroll
            style={{ overflow: 'initial' }}
            dataLength={data?.length != undefined ? data?.length : 0}
            next={update}
            hasMore={true}
            loader={<h3></h3>}
            endMessage={<h4></h4>}
            scrollThreshold={0.6}
          >

            <BookItemList isTablet={isTablet}>
              {data.map(x => (
                <li key={x.id}>{BookItem({ data: x })}</li>
              ))}
            </BookItemList>
          </InfiniteScroll>           
        </SwrContainer>
      </Container>
  );
}

const Container = styled(ContainerBase)`
  padding-top: 60px;
  padding-bottom: 120px;
  ${({ theme }) =>
    theme.media.under_tablet(`
    padding-top: 16px;
    padding-bottom: 100px;
  `)}
`;

const BookItemList = styled.ul`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(auto-fill, 200px);
  justify-content: space-between;
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
const BookItemComponent = styled.div``;

const BackButtonWrap = styled.div`
`;

const BookItem = ({ data }) => {
  const cookie = new Cookie();
  const router = useRouter();

  const Inappmode = router.asPath.includes('Inappmode');  

  return (
    <BookItemComponent>      
        <HybridLink href={`/counseling/list?categoryno=${data.id}&title=상담 분야`} >
          <a>
            <DetailImage
              className="pc_only"
              hasPdf={data.type?.ebook}
              hasAudiobook={data.bookType?.audio}
              width={175}
              alt={data.title}
              src={data.image}
              type={data.type}

              labelSize="small"
            />
            <DetailImage
              className="mb_only"
              hasPdf={data.bookType?.ebook}
              hasAudiobook={data.bookType?.audio}
              width={100}
              height={65}
              alt={data.title}
              src={data.image}
              type={data.type}

              labelSize="small"
            />            
            <Title2>{data.name}</Title2>           
            
          </a>
        </HybridLink>      
    </BookItemComponent>
  );
};

const Title2 = styled(DarkGray13)`
  display: flex;
  align-items: center;
  margin-top: 10px;
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
    font-size:13px;
  `)}
`;
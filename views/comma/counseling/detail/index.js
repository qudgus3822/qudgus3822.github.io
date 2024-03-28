import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import styled from 'styled-components';

import { BookImage } from 'components/book';
import { MainLayout, Row } from 'components/layouts';
import { CommaMainLayout } from "components/layouts/CommaMainLayout";
import {
  Container as ContainerBase,
  SwrContainer,
} from 'components/containers';
import {
  BookClubButton
} from 'views/lounge/components';
import { useRouter } from 'next/router';
import { detectTablet } from 'helpers/common';
import Cookie from 'universal-cookie/lib';
import { HybridLink } from 'components/HybridLink';
import { COLOR } from 'constants/COLOR';
import { Star5,Star4,Star3,Star2,Star1} from './organisms';
const Padding = styled.div`
  margin-top : 200px;
  ${({ theme }) =>
    theme.media.under_tablet(`
      padding: 0 20px;
  `)}
`;
const ButtonWrap = styled.div`
  margin: 80px auto 80px;

  // display: flex;
  // justify-content: space-between;
  // gap: 10px;
  // div, > button {
  //   width: 50%;
  // }
  div > button {
    width: 100%;
  }

  ${({ theme }) =>
    theme.media.under_tablet(`
      // margin: 40px 0 50px;
      // gap: 8px;
  `)}
`;

const Wrap = styled.div`
  width: 100% !important;
`;



export default function CounselingDetailView(authResult) {
  const cookie = new Cookie();
  const router = useRouter();

  const id = cookie.get('user');
  const { contentid } = router.query;

  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [nowPaging, setNowPaging] = useState(0);
  
  const [isTablet, setIsTablet] = useState(false);
  const onSearchData = () => {
    //fetch(`/api/library/book-map-detail?bookmapno=${bookmapno}&startNo=${startNo}&nowPaging=${nowPaging}`)
      const datas = require('/public/data/counseling/detail/data.json').datas;    
      console.log(datas);
      setData(datas);
  }
  useEffect(() => {
    setIsTablet(detectTablet());
    setNowPaging(0);
    onSearchData();
  }, []);

  return (
    <CommaMainLayout>
      <SwrContainer data={data} error={error}>
        <Detail>
          <DetailTop>
          {data.name}
          <Title3>
          by {data.author}
          </Title3>
          </DetailTop>
          <DetailCenter>
            <DetailCenterLeft>
              <Title4>
                별점 : ★{data.star}
              </Title4>
              <Title4>
                평가지수 : {data.count}
              </Title4>
            </DetailCenterLeft>
          <DetailCenterRight>
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
              width={125}
              height={143} 
              alt={data.title}
              src={data.image}
              type={data.type}

              labelSize="small"
            />
          </DetailCenterRight>
          </DetailCenter>
          <DetailBottom>
            <pre>{data.explanation}</pre>
            
          
          </DetailBottom>
        </Detail>
        <StarDetail>
          <Title5>
            {data.count} 명이 평가했어요!
          </Title5>
          <StarGraph>
            <Starcount>
              <Star5>
              </Star5>
            </Starcount>
            <ProgressBar>          
              <Progress width = {data.star5}><StarText>{data.star5}%</StarText></Progress>
            </ProgressBar>
          </StarGraph>
          <StarGraph>
            <Starcount>
              <Star4>
              </Star4>
            </Starcount>
            <ProgressBar>          
              <Progress width = {data.star4}><StarText>{data.star4}%</StarText></Progress>
            </ProgressBar>
          </StarGraph>
          <StarGraph>
            <Starcount>
              <Star3>
              </Star3>
            </Starcount>
            <ProgressBar>          
              <Progress width = {data.star3}><StarText>{data.star3}%</StarText></Progress>
            </ProgressBar>
          </StarGraph>
          <StarGraph>
            <Starcount>
              <Star2>
              </Star2>
            </Starcount>
            <ProgressBar>          
              <Progress width = {data.star2}><StarText>{data.star2}%</StarText></Progress>
            </ProgressBar>
          </StarGraph>
          <StarGraph>
            <Starcount>
              <Star1>
              </Star1>
            </Starcount>
            <ProgressBar>          
              <Progress width = {data.star1}><StarText>{data.star1}%</StarText></Progress>
              
            </ProgressBar>
          </StarGraph>
        </StarDetail>
        
        <Spacer></Spacer>
        <Padding>
          <ButtonWrap>
            
            <>                      
              <Wrap>
                  <HybridLink href={`/comma-chatting`}>
                  <BookClubButton                          
                  >
                    시작하기
                  </BookClubButton>
                  </HybridLink>
                </Wrap>                 
            </>                  
          </ButtonWrap>
                            
          
        </Padding>
        
      </SwrContainer>
    </CommaMainLayout>
  );
}
const DetailTop = styled.div`

font-weight: 500;
font-size:25px;
width:88%;

margin-top : 25px;
margin-left : 20px;
float : left;
text-align: center;
`

const Title3 = styled.span`
margin-left : 20px;
color: #999999;

`;
const Title4 = styled.div`
display:flex;
margin-left : 20px;
margin-bottom : 10px;
`;
const Title5 = styled.div`
color: #999999;
display:flex;
margin-left : 20px;
margin-bottom : 10px;
width:100%;
`;
const DetailCenter = styled.div`
display:flex;
font-weight: 500;
font-size:20px;
width:90%;
margin-top : 25px;
margin-left : 20px;
float : left;
text-align: center;
`
const DetailCenterLeft = styled.div`

margin-top : 20px;
width : 45%;
`
const DetailCenterRight = styled.div`
width : 45%;
margin-left : 20px;

`

const DetailBottom = styled.div`
display:flex;
font-weight: 500;
font-size:15px;
width:90%;
margin-top : 25px;
margin-left : 20px;
margin-bottom : 20px;
float : left;
border-bottom: 4px solid ${COLOR.BACKGROUND_GRAY};
`

const Spacer = styled.div`
  height: 90px;
  ${({ theme }) =>
    theme.media.under_tablet(`
    height: 60px;
  `)}
`;
const StarDetail = styled.div`
margin: 0 auto 50px auto;
width: 88%;
`;
interface ITest{
  width: number,
} 
const ProgressBar = styled.div`
    width: 50%;
    height: 30px;
    background-color: #dedede;
    border-radius:12px;
    font-weight: 600;
    font-size: .8rem;
    margin-top: 20px;
    overflow: hidden;
    margin-left : 10px;
`;

const Progress = styled.div`
    width: ${(props:ITest) => props.width}%; 
    height: 30px;
    padding: 0;
    text-align: center;
    background-color: skyblue;
    color: #111;
    text-align: right;
`
const StarGraph = styled.div`
display:flex;
float : left;
width:100%;
`;
const Starcount = styled.div`
width:45%;

margin-top: 13px;
`;
//StarText
const StarText = styled.div`
padding:6px;
`;
const Detail = styled.div`
`
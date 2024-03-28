import { useCommaAPI } from "net/hooks/comma"
import React from 'react';
import styled from 'styled-components';

import { Container } from 'components/containers';
import { getEllipsis, getLetterSpacing } from 'utilities/getStyles';
import QuizTop from "../components/QuizTop";
const Component = styled.section`
  margin-top:10px;
//   background-color:#E2F0D9;
  ${({ theme }) =>
    theme.media.under_tablet(`
      padding-bottom:10px;
    `)}

`;
const ListContainer = styled.div`
  display: flex;
  margin: 20px 0 0;
  overflow: auto;
  -ms-overflow-style: -ms-autohiding-scrollbar;
`;
const Box = styled.div`
  flex-shrink: 0;
  display: block;
  position: relative;
  padding: 12px 35px 25px;
  width: 350px;
  border-radius: 1px;
  border: solid 1px #dddddd;
  p {
    line-height: 1.53;
    ${getEllipsis(4)};
    min-height: ${0.8}em;
  }

  ${({ theme }) =>
    theme.media.under_tablet(`
      width: 332px;
      padding: 24px 30px 25px;
  `)}
`;

const NicknameDiv = styled.div`
font-weight:1000
`;

const TitleDiv = styled.div`
font-size:12px;
background-color:;
`

const BoxTitle = styled.div`
  padding : 10px 10px;
`

const MainBox = styled.div`
padding-top:0px;
`
const ImageBox = styled.div`
padding-left:10px;
padding-top:10px;
`
const SectionBox = styled.div`
padding-bottom:0px !important;
background-color:#FFFFFF !important;
`

const InfoBox = styled.p`
// background-color:#FFFFFF;
`
export default function CompleteReadCertiTop() {
  const { data, error, mutate } = useCommaAPI('/api/comma-complete-read/top-info');

  return (
    <>
      <Component style={{ marginTop: "30px" }}>
        <Container className='container'>
          {/* <BoxTitle className="title-area">
                        <h2 className="title">내완독인증</h2>
                    </BoxTitle> */}
          <MainBox className="used-main-wrap">
            <SectionBox className="hot-prd-section">
              <div className="item-wrap">
                <div className="item-link">
                  <ImageBox className="img-box">
                    <img src="https://marketstoragedev.blob.core.windows.net/marketdev/aptmarket/product/20231019154455_469Z0.jpg"></img>
                  </ImageBox>
                  <div className="txt-box">
                    <span className="address" style={{ fontWeight: 600 }}>Lv 3. 독서천재</span>

                    <InfoBox className="prd-price">
                      <em>1</em>
                      권의 읽은 도서에 대한
                      완독 인증 테스트를 하고
                      레벨을 높혀 보세요
                    </InfoBox>
                  </div>
                </div>
              </div>
            </SectionBox>
          </MainBox>
        </Container>
      </Component>
    </>
  )
}
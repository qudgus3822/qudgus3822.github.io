import styled from "styled-components";
import { useCommaAPI } from "net/hooks/comma"
import React from 'react';

import { Container } from 'components/containers';
import { Center } from "components/layouts";
import router from "next/router";
const Component = styled.section`
  margin-top:10px;
//   background-color:#E2F0D9;
  ${({ theme }) =>
        theme.media.under_tablet(`
      padding-bottom:10px;
    `)}

`;

const BoxTitle = styled.div`
  padding : 10px 10px;
`
const ImageBox = styled.div`
padding-left:10px;
padding-top:10px;
`

const SpanInfo = styled.span`
margin : 0 auto !important;
justify-content: center;
    align-items: center;
    display: flex;
`

const DescriptionDiv = styled.div`
max-width:100% !important;
`

export default function QuizStart() {
    return (
        <>
            <Component style={{ marginTop: 20 }}>
                <Container className='container'>
                    {/* <BoxTitle className="title-area">
                        <h2 className="title" style={{ fontSize: 20 }}>완독퀴즈</h2>
                    </BoxTitle> */}

                    <ImageBox className="img-box">
                        <img src="https://marketstoragedev.blob.core.windows.net/marketdev/aptmarket/product/20231019154455_469Z0.jpg"></img>
                    </ImageBox>
                    <div className="txt-box">
                        <SpanInfo className="address" style={{ fontWeight: 500, fontSize: "1.1rem" }}>완독 테스트를 시작합니다!</SpanInfo>
                    </div>

                    <div className="chatting-item">
                        <div className="chat-link">
                            <DescriptionDiv className="chat-content">
                                <p className="txt" style={{ fontSize: "1rem", whiteSpace: "normal" }}><em>- </em>책 내용에 대한 3가지 문제가 나갑니다.</p>
                                <p className="txt" style={{ fontSize: "1rem", whiteSpace: "normal" }}><em>- </em>완독 인증을 성공하고 레벨 점수를 올려 보세요.</p>
                                <p className="txt" style={{ fontSize: "1rem", whiteSpace: "normal" }}><em>- </em>완독 퀴즈는 권당 하루에 최대 3번 도전할 수 있어요.</p>
                            </DescriptionDiv>
                        </div>
                    </div>

                    <div className="chat-content-area">
                        <div className="content" style={{ position: "static" }}>
                            <div className="chat-message-wrap notice-chat" messagingdt="2023-10-19T16:44:09.71">
                                <div className="notice-box" style={{ padding: 0 }}>
                                    <div className="btn-area" style={{ margin: 0, padding: 0 }}>
                                        <button type="button" className="btn btn-blue" onClick={() => {
                                            router.replace("quiz");
                                        }}>도전하기</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Component>
        </>
    )
}
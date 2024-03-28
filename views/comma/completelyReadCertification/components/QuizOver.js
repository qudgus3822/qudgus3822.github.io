




import styled from "styled-components";
import React, { useEffect } from 'react';

import { Container } from 'components/containers';
import router from "next/router";
import { PopWebView } from "helpers/InvokeCSharp";
import { useCommaAPIGet, useFetch } from "net/hooks/comma";
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

export default function QuizOver({ isSuccess }) {
    useEffect(() => {
        if (isSuccess) {
            useFetch(`/api/Main/SetComplateAuth/MemberNo/ContentNo`);
        }
    }, [isSuccess]);
    return (
        <>
            <Component>
                <Container className='container'>
                    <ImageBox className="img-box">
                        <img src="https://marketstoragedev.blob.core.windows.net/marketdev/aptmarket/product/20231019154455_469Z0.jpg"></img>
                    </ImageBox>
                    <div className="txt-box">
                        {
                            isSuccess ?
                                (<>
                                    <SpanInfo className="address" style={{ fontWeight: 500, fontSize: "1.1rem" }}>완독 인증 테스트 성공!</SpanInfo>
                                    <SpanInfo className="address" style={{ fontWeight: 500, fontSize: "1.1rem" }}>책을 많이 읽는 당신이 최고~</SpanInfo>
                                </>)
                                :
                                (<>
                                    <SpanInfo className="address" style={{ fontWeight: 500, fontSize: "1.1rem" }}>아쉬워요!</SpanInfo>
                                    <SpanInfo className="address" style={{ fontWeight: 500, fontSize: "1.1rem" }}>완독 퀴즈 테스트에 실패했어요</SpanInfo>
                                </>)
                        }
                    </div>

                    <div className="chatting-item">
                        <div className="chat-link">
                            <DescriptionDiv className="chat-content">
                                {
                                    isSuccess ?
                                        (<>
                                            <p className="txt" style={{ fontSize: "1rem", whiteSpace: "normal" }}><em>- </em>레벨 점수 25점이 추가 되었습니다.</p>
                                            <p className="txt" style={{ fontSize: "1rem", whiteSpace: "normal" }}><em>- </em>다른 픽독 도서를 읽고 새로운 완독 퀴즈에 도전해 보세요.</p>
                                        </>)
                                        :
                                        (<>
                                            <p className="txt" style={{ fontSize: "1rem", whiteSpace: "normal" }}><em>- </em>책의 내용을 다시 한번 확인해 주세요.</p>
                                            <p className="txt" style={{ fontSize: "1rem", whiteSpace: "normal" }}><em>- </em>완독 인증을 성공하고 레벨 점수를 올려 보세요.</p>
                                            <p className="txt" style={{ fontSize: "1rem", whiteSpace: "normal" }}><em>- </em>완독 퀴즈는 권당 하루에 최대 3번 도전할 수 있어요.</p>
                                        </>)
                                }
                            </DescriptionDiv>
                        </div>
                    </div>

                    <div className="chat-content-area">
                        <div className="content" style={{ position: "static" }}>
                            <div className="chat-message-wrap notice-chat" messagingdt="2023-10-19T16:44:09.71">
                                <div className="notice-box" style={{ padding: 0 }}>
                                    {
                                        isSuccess ?
                                            (<>
                                                <div className="btn-area" style={{ margin: 0, padding: 0 }}>
                                                    <button type="button" className="btn btn-white" onClick={() => {
                                                        router.replace('/complete-read');
                                                        PopWebView();
                                                    }}>돌아가기</button>
                                                </div>

                                            </>)
                                            :
                                            (<>
                                                <div className="btn-area col02" style={{ margin: 0, padding: 0 }}>
                                                    <button type="button" className="btn btn-blue" onClick={() => {
                                                        router.replace("/complete-read/quiz");
                                                    }}>재도전!</button>
                                                    <button type="button" className="btn btn-white" onClick={() => {
                                                        router.replace('/complete-read');
                                                        PopWebView();
                                                    }}>돌아가기</button>
                                                </div>
                                            </>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Component>
        </>
    )
}
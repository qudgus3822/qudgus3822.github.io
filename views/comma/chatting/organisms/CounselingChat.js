import { MessageInputArea } from "../components/MessageInputArea"
import { ChatMine } from "../components/ChatMine"
import { ChatOther } from "../components/ChatOther"
import { useEffect, useRef, useState, useLayoutEffect } from "react"
// import { useCommaAPI } from "net/hooks/comma";
import AnswerButton from "../components/AnswerButton";
import styled from "styled-components";
import EndButton from "../components/EndButton";
import React from "react"
React.useLayoutEffect = React.useEffect 


const ZoomLayout = styled.div`
    *{
        font-size:14px !important;
    }
`
export default function CounselingChat() {
    const [messageData, setMessageData] = useState([]);
    const [buttonAnswer, setButtonAnswer] = useState([]);
    const [inputFormat, setInputFormat] = useState("");
    const [rendered, setRendered] = useState(true);
    const [endQuestion, setEndQuestion] = useState(false);

    const [choiceQuestionData, setChoiceQuestionData] = useState({});
    const scrollDiv = useRef(null);

    
    useEffect(async () => {
        const response = await fetch("/data/chatting.json");
        const json = await response.json();
        const obj = {};
        obj.data = json;
        setChoiceQuestionData(obj);
    }, []);

    const sendMessageClickHandler = (inputText, link) => {
        let tempChat = [];
        if (messageData && messageData.length > 0) {
            tempChat = [...messageData];
            tempChat.push({ Message: [{ Text: inputText, Link: link }], isMine: true, key: tempChat.length });
        }
        setMessageData(tempChat);
    }

    const pushOthersmessage = (input) => {
        let tempChat = [];

        if (messageData && messageData.length > 0) {
            tempChat = [...messageData];

            if (tempChat[tempChat.length - 1].isMine == false && input.isMine == false) {
                tempChat[tempChat.length - 1].Message.push(...input.Message);
            }
            else {
                tempChat.push(input);
            }

        }
        else {
            tempChat.push(input);
        }

        setMessageData(tempChat);

        //버튼식 답변이 필요한 부분을 처리함
        if (tempChat[tempChat.length - 1].Message[tempChat[tempChat.length - 1].Message.length - 1].Answers) {
            setButtonAnswer(tempChat[tempChat.length - 1].Message[tempChat[tempChat.length - 1].Message.length - 1].Answers);
        }

        //텍스트 포맷 부분 처리
        if (tempChat[tempChat.length - 1].Message[tempChat[tempChat.length - 1].Message.length - 1].InputFormat) {
            setInputFormat(tempChat[tempChat.length - 1].Message[tempChat[tempChat.length - 1].Message.length - 1].InputFormat);
        }

        //종료버튼 
        if (tempChat[tempChat.length - 1].Message[tempChat[tempChat.length - 1].Message.length - 1].EndQuestion) {
            setEndQuestion(true);
        }
    }

    //최초 질문지 
    useEffect(() => {
        pushOthersmessage(
            {
                Message:
                    [
                        { Text: "세림님은 어떤 사람일까요?" },
                        { Text: "때때로 자기도 자기 자신을 알기 어려워요" },
                        { Text: "그래서 준비했어요 20문 20답!" },
                        { Text: "질문과 답을 하면서 세림님에 대해 알아가봐요♥", Answers: [{ Text: "그래 좋아", Link: 1 }, { Text: "다음에 할래", Link: 1 }] }
                    ]
                , isMine: false
            }
        );
    }, []);

    useEffect(() => {
        scrollDiv.current.scrollTo(0, scrollDiv.current.scrollHeight);
    }, [messageData, buttonAnswer, inputFormat, rendered, endQuestion]);



    useEffect(() => {
        if (messageData && messageData.length > 0 && messageData[messageData.length - 1].Message[messageData[messageData.length - 1].Message.length - 1].Link) {
            async function delayCall() {
                await delay(1000);
                const data = choiceQuestionData.data;
                const findData = data.find((element, index, array) => {
                    if (messageData[messageData.length - 1].Message[messageData[messageData.length - 1].Message.length - 1].Link == Number(element.id)) {
                        element.Message = element.Question;
                        return array[index];
                    }
                });
                setRendered(true);
                pushOthersmessage({ Message: [{ Text: findData.Question, Answers: findData.Answers, Link: findData.Link, InputFormat: findData.InputFormat, ...findData }], isMine: false });
            }
            setRendered(false)
            delayCall();
        }
    }, [messageData]);

    const delay = (ms) => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(resolve, ms);
        })
        return promise;
    }

    const answerButtonClickHandler = (e) => {
        if (choiceQuestionData && choiceQuestionData.data) {
            const data = choiceQuestionData.data;
            data.find((element, index, array) => {
                if (Number(element.id) == Number(e.target.getAttribute("link"))) {
                    sendMessageClickHandler(e.target.getAttribute("text"), Number(e.target.getAttribute("link")));
                }
            });
            setButtonAnswer([]);
        }
    }
    const formatHandler = () => {
        setInputFormat("");
    }


    useLayoutEffect(() => {
        const scrollDown = () => {
            scrollDiv.current.scrollTo(0, scrollDiv.current.scrollHeight);
        }
        window.addEventListener('resize', scrollDown);
        return () => window.removeEventListener('resize', scrollDown);
    }, []);

    return (
        <div className="chat-room-wrap" style={{ margin: "0 10px" }}>
            <div className="container">
                <ZoomLayout className="cont-wrap">
                    <div className="chat-content-area" style={inputFormat ? { height: `calc(100vh - 118px)` } : { height: `calc(100vh - 64px)` }} ref={scrollDiv}>
                        {messageData && messageData.map((item, index) => {
                            if (item.isMine) {
                                return (<ChatMine key={index} data={item}></ChatMine>)
                            }
                            else {
                                return (<ChatOther key={index} data={item}></ChatOther>)
                            }
                        })}
                        {buttonAnswer && buttonAnswer.map((item, index) => {
                            return (<AnswerButton key={index} text={item.Text} link={item.Link} buttonClickHandler={answerButtonClickHandler}></AnswerButton>);
                        })}
                        {!rendered && (
                            <ChatOther key={rendered} loadingChat={true}></ChatOther>
                        )}

                        {
                            endQuestion && (
                                <EndButton></EndButton>
                            )
                        }
                    </div>
                    <MessageInputArea sendMessageClickHandler={sendMessageClickHandler} formatHandler={formatHandler} inputFormat={inputFormat} enable={buttonAnswer && buttonAnswer.length == 0}></MessageInputArea>
                </ZoomLayout>
            </div>
        </div >
    )
}
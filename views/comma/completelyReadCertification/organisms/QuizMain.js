import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { getEllipsis } from 'utilities/getStyles';
import QuizAnswer from '../components/QuizAnswer';
import { useCommaAPI } from "net/hooks/comma"
import router from 'next/router';
const Box = styled.div`
  flex-shrink: 0;
  display: block;
  position: absolute;
  width: 90%;
  border-radius: 10px;
  border: solid 1px #dddddd;
  p {
    line-height: 1.53;
    ${getEllipsis(4)};
    min-height: ${1.5 * 4}em;
  }
  // & ~ &{
  //   margin-left: 23px;
  // }

  margin : auto 0;
  top:50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);

  ${({ theme }) =>
    theme.media.under_tablet(`
      width: 90%;
      padding: 24px 30px 24px;
      // & ~ & {
      //   margin-left: 15px;
      // }
  `)}
`;

const ContentDiv = styled.p`
max-height:none !important;
display:block !important;
`;

export default function QuizMain({ bookNo }) { //bookNo 로 question 가져와야 할 듯?
  const [questionNo, setQuestionNo] = useState(0);
  let { data, error, mutate } = useCommaAPI('/api/comma-complete-read/question');
  let processData = [];

  const [answerData, setAnswerData] = useState(data);
  const [current, setCurrent] = useState(-1);

  useEffect(() => {
    if (!answerData)
      setAnswerData(data);
  }, data)

  let question;
  if (answerData) {
    question = answerData[questionNo];

    let index = 0;
    let temp = {};
    for (let pie of question.Answers) {
      temp["text" + index % 2] = pie.text;
      temp["index"] = index;
      temp["color"] = current;
      if (index % 2 != 0) {
        processData.push(temp);
        temp = {};
      }
      index++;
    }
  }

  const answerClickHandler = (e) => {
    const answer = e.target.getAttribute("no");
    const targetQuestion = e.target.getAttribute("questionNo");
    setCurrent(Number(answer));
    let tempAnswer = answerData;
    tempAnswer[targetQuestion].answer = Number(answer);
    setAnswerData(tempAnswer);
  }

  const prevClickHandler = (e) => {
    if (answerData[questionNo - 1].answer || answerData[questionNo - 1].answer == 0) {
      setCurrent(answerData[questionNo - 1].answer);
    }
    else {
      setCurrent(-1);
    }
    setQuestionNo(questionNo - 1);
  }

  const nextClickHandler = (e) => {
    if (answerData.length - 1 == questionNo) {
      router.replace("/complete-read/quiz-over");
      return;
    }

    if (answerData[questionNo + 1].answer) {
      setCurrent(answerData[questionNo + 1].answer);
    }
    else {
      setCurrent(-1);
    }


    setQuestionNo(questionNo + 1);

  }

  return (
    <Box>
      <div>
        <ContentDiv
          className='contentLine'
          style={{ fontWeight: 400, fontSize: 20 }}
        >
          {question && (<><em style={{ fontWeight: 600 }}>Q. </em> {question.Question}</>)}
        </ContentDiv>
      </div>
      <div className="chat-content-area">
        <div className="content" style={{ position: "static", padding: 0 }}>
          <div className="chat-message-wrap notice-chat" style={{ padding: 0 }}>
            <div className="notice-box" style={{ padding: 0 }}>
              {processData && processData.length > 0 && processData.map(
                (item, index) => {
                  return (<QuizAnswer key={index} data={item} clickHandler={answerClickHandler} current={current} $questionNo={questionNo}></QuizAnswer>)
                }
              )}
            </div>
          </div>
        </div>
      </div>
      <a style={{ float: "left" }} onClick={prevClickHandler}>
        <img alt="" width="28" height="28" src="/images/arrow_link.png" style={{ transform: "rotate(180deg)" }}></img>
      </a>
      <a style={{ marginLeft: "auto", marginRight: "0", float: "right" }} onClick={nextClickHandler}>
        <img style={{ marginLeft: "auto", marginRight: "0" }} alt="" width="28" height="28" src="/images/arrow_link.png"></img>
      </a>
    </Box>
  )
}
import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const Loading = styled.div`
  z-index: 5;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-items: center;

  transition: var(--transition);
  ${({ rendered }) =>
        rendered
            ? 'opacity: 0;pointer-events:none;'
            : 'opacity: 1;background-color:rgba(0,0,0,0.03); border-radius: 8px;'}
  > div {
    position: absolute;
    left: 50%;
    width: 100px;
    margin-left: -50px;
  }
`;

export const ChatOther = ({ data, loadingChat }) => {
    return (
        <>
            <div className="chat-message-wrap user-chat">
                <div className="user-img">
                    <a href="#">
                        <img src="/images/comma/catmemo.png" />
                    </a>
                </div>
                {/* <div className="msg-bubble-wrap">
                    <div className="bubble-box">
                        <div className="bubble">{data.Message}</div>
                    </div>
                </div> */}
                {loadingChat ?
                    (<div className="msg-bubble-wrap">
                        <div className="bubble-box">
                            <div className="bubble">
                                <Loading rendered={false}>
                                    <div className="dot-stage">
                                        <span className="dot-pulse" />
                                    </div>
                                </Loading>
                            </div>
                        </div>
                    </div>
                    )
                    :
                    (<div className="msg-bubble-wrap">
                        {data && data.Message && data.Message.length > 0 && data.Message.map((item, index) => {
                            return (
                                <div key={index} className="bubble-box">
                                    <div className="bubble">{item.Text}</div>
                                </div>
                            )
                        })}
                    </div>
                    )
                }
            </div>
        </>
    )
}
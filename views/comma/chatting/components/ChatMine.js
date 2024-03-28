import React, { useState, useEffect } from 'react';

export const ChatMine = ({ data }) => {
    return (
        <div className="chat-message-wrap my-chat">
            <div className="msg-bubble-wrap">
                <div className="bubble-box">
                    <div className="bubble">{data.Message[0].Text}</div>
                </div>
            </div>
        </div>
    )
}
import { useEffect, useState } from "react"

export const MessageInputArea = ({ data, sendMessageClickHandler, inputFormat, formatHandler, enable }) => {

    const [status, setStatus] = useState("");
    const [inputText, setInputText] = useState("");

    const [before, setBefore] = useState("");
    const [after, setAfter] = useState("");
    const changeSendButtonStatus = (e) => {

        if (e.target.value) {
            setStatus(" active");

        }
        else {
            setStatus("");
        }

        setInputText(e.target.value);
    }
    useEffect(() => {

    }, [inputText]);

    useEffect(() => {
        if (inputFormat) {
            const index = inputFormat.Text.toString().indexOf('***');

            setBefore(inputFormat.Text.substring(0, index));
            setAfter(inputFormat.Text.substring(index).replace("***", ""));
        }

    }, [inputFormat]);

    return (
        <form className="msg-send-form">
            <div className="msg-top-area">
                <div className="msg-input-box" style={{ margin: "auto 0", width: "100%" }}>
                    <div style={Object.assign(inputFormat ? ({ display: "block" }) : ({ display: "none" }), { height: "54px" })}>
                        <div style={{ background: "#FFFF", borderRadius: "19px", display: "inline-block", padding: "5px" }}>
                            {before}
                            <div style={{ background: "#4778ff", display: "inline-block", padding: "5px", borderRadius: "19px", color: "#FFFF" }}>
                                {inputText}
                            </div>
                            {after}
                        </div>
                    </div>
                    <textarea id="message" disabled={!enable} placeholder={enable ? ("") : ("메세지를 보낼 수 없어요")} className="msg" rows="1" autoComplete="off" onInput={changeSendButtonStatus} value={inputText}></textarea>
                    <button id="sendmessage" type="button" className={"btn-msg-submit" + status} disabled={!enable}
                        onClick={(e) => {
                            if (inputFormat) {
                                sendMessageClickHandler(before + inputText + after, inputFormat.Link);
                                setInputText("");
                                setStatus("");
                                formatHandler();
                            }
                            else {
                                sendMessageClickHandler(inputText);
                                setInputText("");
                                setStatus("");
                            }
                        }}
                    >전송</button>
                </div>
            </div>
        </form>
    )
}
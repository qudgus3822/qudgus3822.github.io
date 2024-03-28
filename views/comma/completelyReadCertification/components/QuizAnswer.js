import { useEffect, useState } from "react"

export default function QuizAnswer({ data, clickHandler, current, questionNo }) {

    let renderData = [];
    renderData.push({ index: data.index - 1, text: data.text0 });
    renderData.push({ index: data.index, text: data.text1 })
    return (
        <>
            <div className="btn-area col02" style={{ margin: 0, padding: 0 }}>
                {renderData && renderData.map((item) => {
                    let color;
                    if (item.index == current) {
                        color = "blue";
                    }
                    else {
                        color = "white";
                    }
                    return (
                        <button style={{ fontWeight: 400, fontSize: 18 }} type="button" key={item.index} no={item.index} questionNo={questionNo} className={`btn btn-${color}`} onClick={clickHandler}>{item["text"]}</button>
                    )
                })}
            </div>
        </>
    )
}
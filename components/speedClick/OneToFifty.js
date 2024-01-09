import React, { useState, useEffect, useRef } from "react";
import Board from "./Board";

let array = [];
for (let i = 1; i <= 25; i++) {
    array.push(i);
}

export default function OneToFifty() {

    const [numbers, setNumbers] = useState(array);
    const [gameFlag, setGameFlag] = useState(false);
    const [current, setCurrent] = useState(1);
    const [timeElapsed, setTimeElapsed] = useState(0);

    const cellClickHandler = (num) => {
        console.log(num)
    }

    return (
        <>
            <div style={Container}>
                <Board numbers={numbers} cellClickHandler={cellClickHandler} ></Board>
            </div>
            <div className="row">
                <button className="btn btn-primary" onClick={() => { debugger; gameFlag ? setGameFlag(false) : setGameFlag(true) }}>{gameFlag ? "강제 종료!" : "게임시작"}</button>
            </div>
        </>

    );
}

const Container = {
    marginLeft: "auto",
    marginRight: "auto",
    width: "600px",
    height: "800px",
    border: "1px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};


// export default OneToFifty;
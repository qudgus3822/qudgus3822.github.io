import React from "react";
import Cell from "./Cell";

function Board({ numbers, cellClickHandler }) {


    return (
        <div style={Container}>
            {numbers.map((num, index) => (
                <Cell num={num} key={index} cellClickHandler={cellClickHandler}></Cell>
            ))}
        </div>
    );
}
const Container = {
    width: "400px",
    height: "400px",
    border: "1px solid blue",
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gridTemplateRows: "repeat(5, 1fr)"
}

export default Board;
import React from "react";

function Cell({ num, cellClickHandler }) {

    const clickHandler = () => {
        cellClickHandler(num);
    }

    return (<>
        <div style={Container} onClick={clickHandler}>{num}</div>
        {/* <button>test</button> */}
    </>);
}

const Container = {
    border: "1px solid red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "30px"
}

export default Cell;
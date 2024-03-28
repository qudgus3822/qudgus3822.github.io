import { useState } from "react";
import { CompleteReadBook } from "../components/CompleteReadBook";
import CompleteReadTab from "../components/CompleteReadTab";
import { useCommaAPI } from "net/hooks/comma";

export default function CompleteReadCertiMain() {

    const [current, setCurrent] = useState(false);
    const tabClickHandler = (param) => {
        setCurrent(param);
    }

    // const certiData = useCommaAPI("api/read-certi")
    return (
        <>
            <CompleteReadTab current={current} tabClickHandler={tabClickHandler}></CompleteReadTab>
            <CompleteReadBook current={current}></CompleteReadBook>
        </>
    )
}
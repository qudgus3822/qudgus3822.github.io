import { useEffect, useState } from "react"
import PopularFieldItem from "../components/PopularFieldItem";
import { Container } from "components/containers";
import { Display2 } from "components/texts";
import { useCommaAPIGet } from "net/hooks/comma";

export default function PopularField({ marginTop = "30px", title = "내 학년에서 많이 본 도서 분야" }) {

    const [fieldData, setFieldData] = useState([]);
    const { data } = useCommaAPIGet("/api/Main/GetContentCateGory");

    useEffect(() => {

    }, []);

    return (
        <>
            <Container style={{ marginTop: marginTop }}>
                <Display2>{title}</Display2>
            </Container>
            <div style={{ marginTop: "30px", margin: 15 }}>
                {data && data.length > 0 && data.map((data) => {
                    return (<PopularFieldItem data={data}></PopularFieldItem>)
                })}
            </div >
        </>
    )
}
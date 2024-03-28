import router from "next/router"

export default function EndButton({ }) {

    const moveBack = () => {
        router.replace('/counseling/detail');
    }
    return (<div style={{ display: "inline-block", marginLeft: "10px", marginBottom: "10px" }}>
        <button style={{
            border: "1px solid black",
            borderRadius: "15px",
            backgroundColor: "white",
            color: "black",
            padding: "5px 10px",
            margin: "0px 0 0 5px",
            fontSize: "16px",
            cursor: "pointer"
        }} onClick={moveBack} type="button">돌아가기</button>
    </div >)
}
import { useEffect, useState } from "react"
import { readFile } from "../../../db/fileProcess";

export default function BlogContentList() {

    const [data, setData] = useState([]);
    const [bindData, setBindData] = useState([]);
    useEffect(() => {
        readFile("blog.json").then((res) => {
            if (res && res.length > 0) {
                let tempData = [];
                let resultData = [];
                let index = 0;
                for (let item of res) {

                    tempData.push(item[index]);
                    index++;

                    if (tempData.length == 3) {
                        resultData.push(tempData);
                        tempData = [];
                    }

                    if (index == res.length && tempData.length > 0) {
                        resultData.push(tempData);
                    }
                }
            }
        })
    }, []);

    return (<>
        <div class="row">

        </div>
    </>)
}
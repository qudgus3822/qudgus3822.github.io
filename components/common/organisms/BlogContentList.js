import { useEffect, useState } from "react"
import { readFile } from "../../../db/fileProcess";
import BlogContent from "../components/BlogContent";

export default function BlogContentList() {
    const [data, setData] = useState([]);
    useEffect(() => {
        // readFile("blog.json").then((res) => {
        //     if (res && res.length > 0) {
        //         let tempData = [];
        //         let resultData = [];
        //         let index = 0;
        //         for (let item of res) {
        //             tempData.push(item);
        //             index++;

        //             if (tempData.length == 3) {
        //                 resultData.push(tempData);
        //                 tempData = [];
        //             }
        //             if (index == res.length && tempData.length > 0) {
        //                 resultData.push(tempData);
        //             }
        //         }
        //         setData(resultData);
        //     }
        // });
    }, []);


    return (<>
        {/* {data && data.length > 0 && data.map((rowItem, rowIndex) => {
            return (
                <div key={rowIndex} className="row" >
                    {
                        rowItem.map((item, itemIndex) => {
                            return (
                                // <BlogContent data={item} key={itemIndex}></BlogContent>
                            )
                        })
                    }
                </div>
            )
        })} */}
    </>)
}
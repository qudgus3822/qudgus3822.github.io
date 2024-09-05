import { useEffect, useState } from "react";
import React from "react";
import { getFirebaseData } from "../../../utils/firebase";
import BlogContent from "../components/BlogContent";

export default function BlogContentList() {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    const blogData = getFirebaseData("blogs/").then((res: any) => {
      if (res && res.success) {
        let data = Object.values(res.data);
        let keys = Object.keys(res.data);
        let tempData = [];
        let resultData = [];
        let index = 0;
        for (let item of data as any) {
          item.key = keys[index];
          tempData.push(item);
          index++;

          if (tempData.length == 3) {
            resultData.push(tempData);
            tempData = [];
          }
          if (index == data.length && tempData.length > 0) {
            resultData.push(tempData);
          }
        }
        setData(resultData);
      }
    });
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

  return (
    <div style={{ marginTop: "10px" }}>
      {data &&
        data.length > 0 &&
        data.map((rowItem: any, rowIndex: number) => {
          return (
            <div key={rowIndex} className="row">
              {rowItem.map((item: any, itemIndex: number) => {
                return <BlogContent data={item} key={itemIndex}></BlogContent>;
              })}
            </div>
          );
        })}
    </div>
  );
}

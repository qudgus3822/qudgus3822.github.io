import TraceBasic from "../components/TraceBasic"
import { useState } from "react";
import { useEffect } from "react";
import { setFirebaseData, getFirebaseData, pushFirebaseData } from "../../../db/firebase"
export default function TraceList() {
    const [data, setData] = useState([]);
    useEffect(() => {

        const traceData = getFirebaseData("traces/").then((res) => {
            if (res && res.success) {
                let data = Object.values(res.data);
                let tempData = [];
                let index = 0;
                for (let item of data) {
                    tempData.push(item);
                    index++;
                }
                setData(tempData);
            }
        });
    }, []);

    return (<>
        <div className="row">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-body">
                        {data && data.length > 0 && data.map((item) => {
                            return (<TraceBasic Name={item.name} Contents={item.contents} Date={item.date}></TraceBasic>)
                        })}
                    </div>
                </div>
            </div>
        </div>
    </>)
}
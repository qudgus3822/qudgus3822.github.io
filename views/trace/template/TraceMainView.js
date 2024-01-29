import CommonHeader from "../../common/organisms/CommonHeader";
import CommonLayout from "../../common/organisms/CommonLayout";
import TraceHeader from "../organisms/TraceHeader";
import TraceList from "../organisms/TraceList"
export default function TraceMainView() {

    return (<>
        <CommonLayout>
            <TraceHeader></TraceHeader>
            <TraceList></TraceList>
        </CommonLayout>
    </>)
}
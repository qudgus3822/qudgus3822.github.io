import CommonHeader from "../../common/organisms/CommonHeader";
import CommonLayout from "../../common/organisms/CommonLayout";
import BlogContentList from "../organisms/BlogContentList"
import BlogHeader from "../organisms/BlogHeader";
export default function BlogMainView() {

    return (<>
        <CommonLayout>
            <BlogHeader></BlogHeader>
            <BlogContentList></BlogContentList>
        </CommonLayout>
    </>)
}
import CommonHeader from "../../common/organisms/CommonHeader";
import CommonLayout from "../../common/organisms/CommonLayout";
import BlogContentList from "../../common/organisms/BlogContentList"
export default function BlogMainView() {

    return (<>
        <CommonLayout>
            <CommonHeader></CommonHeader>
            <BlogContentList></BlogContentList>
        </CommonLayout>
    </>)
}
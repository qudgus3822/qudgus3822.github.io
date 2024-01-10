import CommonHeader from "../../common/organisms/CommonHeader";
import CommonLayout from "../../common/organisms/CommonLayout";
import BlogContentList from "../../common/organisms/BlogContentList"
import BlogHeader from "../../common/organisms/BlogHeader";
export default function BlogMainView() {

    return (<>
        <CommonLayout>
            <CommonHeader></CommonHeader>
            <BlogHeader></BlogHeader>
            <BlogContentList></BlogContentList>
        </CommonLayout>
    </>)
}
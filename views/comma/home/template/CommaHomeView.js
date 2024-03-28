import CommaMainAnnouncement from "../components/CommaMainAnnouncement";
import CommaMainMenuBox from "../components/CommaMainMenuBox";
import { CommaRecommendedBook } from "../components/CommaRecommendedBook";
import { CommaMainButtonMenuList } from "../organisms/CommaMainButtonMenuList";
import { CommaMainTopInfo } from "../organisms/CommaMainTopInfo";

export default function CommaHomeView() {
    return (
        <>
            <CommaMainTopInfo></CommaMainTopInfo>
            {/* <CommaMainButtonMenuList></CommaMainButtonMenuList> */}
            <CommaMainMenuBox no={0}></CommaMainMenuBox>
            <CommaRecommendedBook></CommaRecommendedBook>
            <CommaMainAnnouncement></CommaMainAnnouncement>
        </>
    )
}
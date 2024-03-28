
import { CommaMainLayout } from "components/layouts/CommaMainLayout";
import CompleteReadTab from "../components/CompleteReadTab";
import CompleteReadCertiMain from "../organisms/CompleteReadCertiMain";
import CompleteReadCertiTop from "../organisms/CompleteReadCertiTop";
import { MainLayout } from "components/layouts";

export default function CompleteReadCertiView() {

    return (
        <CommaMainLayout>
            <CompleteReadCertiTop></CompleteReadCertiTop>
            <CompleteReadCertiMain></CompleteReadCertiMain>
        </CommaMainLayout>
    )
}
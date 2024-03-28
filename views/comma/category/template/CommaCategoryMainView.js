import { MainLayout } from "components/layouts";
import CommaCategory from "../components/CommaCategory";
import { CommaMainLayout } from "components/layouts/CommaMainLayout";

export default function CommaCategoryMainView() {
    return (
        <CommaMainLayout>
            <CommaCategory></CommaCategory>
        </CommaMainLayout>
    )
}
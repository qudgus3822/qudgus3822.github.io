import { useEffect, useLayoutEffect, useState } from "react";
import QuizOver from "../components/QuizOver";
import { CommaMainLayout } from "components/layouts/CommaMainLayout";

export default function QuizOverView() {
    const [random, setRandom] = useState(0)
    useEffect(() => {
        setRandom(Math.round(Math.random()));
    }, []);

    return (
        <CommaMainLayout>
            <QuizOver isSuccess={random} ></QuizOver>
        </CommaMainLayout>

    )
}
import { HybridLink } from "components/HybridLink";
import router from "next/router";

export default function PopularFieldItem({ data }) {

    const clickEventHandler = (e) => {
        // router.push("book-field?category"+e.target);
    }

    return (
        <>
            <div style={{ padding: "10px", margin: "3px", background: "#dddddd", borderRadius: "10px", display: "inline-block" }}>
                <HybridLink href={`/comma-category?category=${data.id}`}>
                    {data.title}
                </HybridLink>
            </div>
        </>
    )
}
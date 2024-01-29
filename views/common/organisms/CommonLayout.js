import { useEffect, useState } from "react";
import CommonHeader from "./CommonHeader";
import CommonLeft from "./CommonLeft";

export default function CommonLayout({ children }) {
    

    useEffect(() => {
        
    }, []);
    return (<>
        {/* @@include('./partials/left-sidebar-tab.html') */}

        {/* @@include('./partials/topbar.html') */}

        <CommonHeader></CommonHeader>
        <CommonLeft></CommonLeft>

        <div className="page-wrapper">
            <div className="page-content-tab">
                <div className="container-fluid" style={{ marginTop: "20px" }}>
                    {children}
                </div>
            </div>
        </div>
    </>
    )
}
import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react"

export default function CommonLeft({ }) {
    const [active, setActive] = useState("")

    const router = useRouter();

    useEffect(() => {
        if (router.query.currentMenu) {
            setActive(router.query.currentMenu);
        }
        else {
            setActive("Profile");
        }



    }, []);
    return (
        <>
            <div className="left-sidebar" style={{ minWidth: "150px" }}>
                {/* <div className="brand">
                    김병현의 홈페이지
                </div> */}

                <div className="menu-content">
                    <div className="menu-body navbar-vertical tab-content">
                        <div className="collapse navbar-collapse">

                            <ul className={"navbar-nav"}>

                                <li className="nav-item">
                                    <a className={`nav-link ${active == "Profile" ? "active" : ""}`} onClick={(e) => {
                                        router.push({ pathname: "/", query: { currentMenu: "Profile" } });
                                    }}>Profile</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${active == "Blog" ? "active" : ""}`}
                                        onClick={(e) => {
                                            router.push({ pathname: "/blog", query: { currentMenu: "Blog" } });
                                        }}>Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${active == "Trace" ? "active" : ""}`} onClick={(e) => {
                                        router.push({ pathname: "/trace", query: { currentMenu: "Trace" } });
                                    }}>Trace</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${active == "Game" ? "active" : ""}`} onClick={(e) => {
                                        router.push({ pathname: "/game", query: { currentMenu: "Game" } });
                                    }}>Game</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
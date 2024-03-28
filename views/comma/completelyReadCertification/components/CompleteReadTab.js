import { useState } from "react"
import styled from "styled-components"

const TabMain = styled.div`
    position:static !important;
    padding:0px !important;
`
const TabChild = styled.div`
width:50vw !important;
`

const SwiperContainer = styled.div`
width:100% !important;
`
export default function CompleteReadTab({ current, tabClickHandler }) {

    return (
        <>
            <div className="used-main-wrap" style={{ paddingTop: "10px" }}>
                <TabMain className="main-category-area">
                    <SwiperContainer className="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-free-mode swiper-container-ios">
                        <div className="swiper-wrapper">
                            <TabChild className={`swiper-slide ${current ? "active" : ""}`} >
                                <a onClick={() => { tabClickHandler(true); }} style={{ textAlign: "center", fontSize: 20 }}>인증</a>
                            </TabChild>
                            <TabChild className={`swiper-slide ${current ? "" : "active"}`}>
                                <a onClick={() => { tabClickHandler(false); }} style={{ textAlign: "center", fontSize: 20 }}>미인증
                                </a>
                            </TabChild>
                        </div>
                    </SwiperContainer>
                </TabMain>
            </div >
        </>
    )
}
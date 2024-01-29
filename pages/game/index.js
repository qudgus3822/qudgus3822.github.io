import React from "react";
import Router, { useRouter } from "next/router";
import CommonLayout from "../../views/common/organisms/CommonLayout";

export default function GamePage() {
    const router = useRouter();

    return (<CommonLayout>
        {/* <div className="page-wrapper">
            <div className="page-content-tab">
                <div className="container-fluid" style={{ marginTop: "20px" }}> */}
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-header">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h4 className="card-title">김병현의 게임리스트</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="alert alert-outline-primary" role="alert" onClick={() => { router.push("/games/speedClick") }}>
                                    <strong>숫자 빨리 누르기 게임</strong> 순발력 테스트 게임입니다.
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </div>
            </div>
        </div> */}
    </CommonLayout>);
}
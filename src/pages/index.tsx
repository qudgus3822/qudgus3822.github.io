import React from "react";
import { useEffect, useState } from "react";
import profile from "../images/profile2.jpg";

export default function IndexPage() {
  let highSchoolMap;
  let universityMap;

  useEffect(() => {}, []);
  useEffect(() => {
    // let script = document.querySelector(`script[src="/assets/js/app.js"]`);
    // if (!script) {
    //   script = document.createElement("script");
    //   script.src = "/assets/js/app.js";
    //   script.async = true;
    //   document.body.appendChild(script);
    // }
    // script = document.querySelector(
    //   `script[src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=b15q7nzk9p"]`
    // );
    // if (!script) {
    //   script = document.createElement("script");
    //   script.src =
    //     "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=b15q7nzk9p";
    //   script.async = true;
    //   document.body.appendChild(script);
    //   script.addEventListener("load", () => {
    //     highSchoolMap = new naver.maps.Map("mapHighSchool", {
    //       center: new naver.maps.LatLng(36.7935697, 126.4587419),
    //       zoom: 15,
    //     });
    //     universityMap = new naver.maps.Map("mapUniversity", {
    //       center: new naver.maps.LatLng(36.8374266, 127.1687229),
    //       zoom: 15,
    //     });
    //     let highSchoolMarker = new naver.maps.Marker({
    //       position: new naver.maps.LatLng(36.7935697, 126.4587419),
    //       map: highSchoolMap,
    //     });
    //     let universityMarker = new naver.maps.Marker({
    //       position: new naver.maps.LatLng(36.8374266, 127.1687229),
    //       map: universityMap,
    //     });
    //   });
    // }
  }, []);

  const [currentTab, setCurrentTab] = useState("web");
  return (
    <div className="">
      <div className="page-content-tab">
        <div className="container-fluid" style={{ marginTop: "20px" }}>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="met-profile">
                    <div className="row">
                      <div className="col-lg-6 align-self-center mb-3 mb-lg-0">
                        <div className="met-profile-main">
                          <div className="met-profile-main-pic">
                            <img
                              src={profile}
                              alt=""
                              height="110"
                              className="rounded-circle"
                            ></img>
                          </div>
                          <div className="met-profile_user-detail">
                            <h5 className="met-user-name">김 병 현</h5>
                            <p className="mb-0 met-user-name-post">
                              프로그래머
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6 ms-auto align-self-center">
                        <ul className="list-unstyled personal-detail mb-0">
                          <li className="">
                            <i className="las la-phone mr-2 text-secondary font-22 align-middle"></i>{" "}
                            <b> phone </b> : 010-2835-3822
                          </li>
                          <li className="mt-2">
                            <i className="las la-envelope text-secondary font-22 align-middle mr-2"></i>{" "}
                            <b> Email </b> : qudgus3822@gmail.com
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <button type="button" className="btn btn-de-primary float-end" onClick={() => { router.push("/games") }}>게임하러가기</button> */}
                </div>

                <div className="card-body p-0">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-bs-toggle="tab"
                        href="#front"
                        role="tab"
                        aria-selected="false"
                      >
                        Web
                      </a>
                    </li>

                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#desktop"
                        role="tab"
                        aria-selected="false"
                      >
                        desktop
                      </a>
                    </li>

                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#intro"
                        role="tab"
                        aria-selected="false"
                      >
                        소개
                      </a>
                    </li>

                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#info"
                        role="tab"
                        aria-selected="false"
                      >
                        내 정보
                      </a>
                    </li>

                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#blog"
                        role="tab"
                        aria-selected="false"
                      >
                        블로그
                      </a>
                    </li>

                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#trace"
                        role="tab"
                        aria-selected="false"
                      >
                        방명록
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    {/* {currentTab === "web" && <Web></Web>} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

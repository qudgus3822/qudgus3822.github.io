import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function IndexPage() {
  let hosturl = "";

  let highSchoolMap;
  let universityMap;
  useEffect(() => {
    let script = document.querySelector(
      `script[src="/nextjs-blog/assets/js/app.js"]`
    );

    if (!script) {
      script = document.createElement("script");
      script.src = "/nextjs-blog/assets/js/app.js";
      script.async = true;
      document.body.appendChild(script);
    }

    hosturl = window.location.host;


    script = document.querySelector(
      `script[src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=b15q7nzk9p"]`
    );

    if (!script) {
      script = document.createElement("script");
      script.src = "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=b15q7nzk9p";
      script.async = true;
      document.body.appendChild(script);

      script.addEventListener("load", () => {
        highSchoolMap = new naver.maps.Map('mapHighSchool', {
          center: new naver.maps.LatLng(36.7935697, 126.4587419),
          zoom: 15
        });
        universityMap = new naver.maps.Map('mapUniversity', {
          center: new naver.maps.LatLng(36.8374266, 127.1687229),
          zoom: 15
        });

        let highSchoolMarker = new naver.maps.Marker({
          position: new naver.maps.LatLng(36.7935697, 126.4587419),
          map: highSchoolMap
        });
        let universityMarker = new naver.maps.Marker({
          position: new naver.maps.LatLng(36.8374266, 127.1687229),
          map: universityMap
        });
      })
    }
  }, []);
  return (
    <>
      <div className="page-wrapper" style={{ marginTop: "20px;" }}>

        <div className="page-content-tab">

          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="met-profile">
                      <div className="row">
                        <div className="col-lg-6 align-self-center mb-3 mb-lg-0">
                          <div className="met-profile-main">
                            <div className="met-profile-main-pic">
                              <img src="/nextjs-blog/assets/images/users/user-4.jpg" alt="" height="110" className="rounded-circle"></img>
                              <span className="met-profile_main-pic-change">
                                <i className="fas fa-camera"></i>
                              </span>
                            </div>
                            <div className="met-profile_user-detail">
                              <h5 className="met-user-name">김 병 현</h5>
                              <p className="mb-0 met-user-name-post">프로그래머</p>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-6 ms-auto align-self-center">
                          <ul className="list-unstyled personal-detail mb-0">
                            <li className=""><i className="las la-phone mr-2 text-secondary font-22 align-middle"></i> <b> phone </b> : +82 2835 3822</li>
                            <li className="mt-2"><i className="las la-envelope text-secondary font-22 align-middle mr-2"></i> <b> Email </b> : qudgus3822@gmail.com</li>
                            <li className="mt-2"><i className="las la-globe text-secondary font-22 align-middle mr-2"></i> <b> Website </b> :
                              <a href="https://qudgus3822.github.io/nextjs-blog/" className="font-14 text-primary">https://qudgus3822.github.io/nextjs-blog/</a>
                            </li>
                          </ul>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 해본 것들 시작*/}
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">내가 해 본 것들</h4>
                  </div>
                  <div className="card-body">
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <h5 className="accordion-header m-0" id="headingProjectOne">
                          <button className="accordion-button fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseProjectOne" aria-expanded="false" aria-controls="collapseProjectOne">
                            전자책 뷰어
                          </button>
                        </h5>
                        <div id="collapseProjectOne" className="accordion-collapse collapse" aria-labelledby="headingProjectOne" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            {/* .epub :  <a href="/nextjs-blog/EbookViewer/epub/web/epub-viewer.html">클릭해서 이동</a> */}
                            .epub :  <a href={hosturl + "/nextjs-blog/EbookViewer/epub/web/epub-viewer.html"}>클릭해서 이동</a>
                            <br></br>
                            <br></br>
                            .PDF :  <a href={hosturl + "/nextjs-blog/EbookViewer/pdf/web/pdf-viewer.html"}>클릭해서 이동</a>
                          </div>
                        </div>
                      </div>
                      {/* <div className="accordion-item">
                        <h5 className="accordion-header m-0" id="headingProjectTwo">
                          <button className="accordion-button fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseProjectTwo" aria-expanded="false" aria-controls="collapseProjectTwo">
                          </button>
                        </h5>
                        <div id="collapseProjectTwo" className="accordion-collapse collapse" aria-labelledby="headingProjectTwo" data-bs-parent="#accordionExample" >
                          <div className="accordion-body">
                            
                          </div>
                        </div>
                      </div> */}

                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 해본것들 끝  */}

            {/* 내가 다닌 학교 시작*/}
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">내가 다닌 학교</h4>
                    <p className="text-muted mb-0"></p>
                  </div>
                  <div className="card-body">
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <h5 className="accordion-header m-0" id="headingSchoolOne">
                          <button className="accordion-button fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSchoolOne" aria-expanded="false" aria-controls="collapseSchoolOne">
                            서령 고등학교
                          </button>
                        </h5>
                        <div id="collapseSchoolOne" className="accordion-collapse collapse" aria-labelledby="headingSchoolOne" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            위치 : <br></br>
                            <div id="mapHighSchool" className="gmaps" style={{ position: "relative", overflow: "hidden", width: "30vw" }}></div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h5 className="accordion-header m-0" id="headingSchoolTwo">
                          <button className="accordion-button fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSchoolTwo" aria-expanded="false" aria-controls="collapseSchoolTwo">
                            단국대학교(천안)
                          </button>
                        </h5>
                        <div id="collapseSchoolTwo" className="accordion-collapse collapse" aria-labelledby="headingSchoolTwo" data-bs-parent="#accordionExample" >
                          <div className="accordion-body">
                            위치 : <br></br><div id="mapUniversity" className="gmaps" style={{ position: "relative", overflow: "hidden", width: "30vw" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 내가 다닌 학교 끝*/}

            {/* 내가 딴 자격증! 시작*/}
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">내가 딴 자격증</h4>
                  </div>
                  <div className="card-body">
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <h5 className="accordion-header m-0" id="headingOne">
                          <button className="accordion-button fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            정보처리기사
                          </button>
                        </h5>
                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                          <div className="accordion-body">

                          </div>
                        </div>
                      </div>
                      {/* <div className="accordion-item">
                        <h5 className="accordion-header m-0" id="headingTwo">
                          <button className="accordion-button fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            전자책 뷰어(epub)
                          </button>
                        </h5>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" >
                          <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as
                            well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
                            <code>.accordion-body</code>, though the transition does limit overflow.
                          </div>
                        </div>
                      </div> */}

                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 내가 딴 자격증! 끝 */}
          </div>
        </div>
      </div>
    </>
  );
}
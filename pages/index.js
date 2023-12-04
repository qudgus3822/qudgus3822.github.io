import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Router, useRouter } from "next/router";
import { readFile, uploadFile } from "../db/fileProcess";

export default function IndexPage() {
  let router = useRouter();
  let hosturl = "";

  let highSchoolMap;
  let universityMap;

  useEffect(() => {

  }, []);
  useEffect(() => {
    let script = document.querySelector(
      `script[src="/assets/js/app.js"]`
    );

    if (!script) {
      script = document.createElement("script");
      script.src = "/assets/js/app.js";
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

  const [epubUrl, setEpubFile] = useState("");
  const [pdfUrl, setPdfFile] = useState("");

  const changeEpubFile = (e) => {
    setEpubFile(e.target.value);
  }

  const changePdfFile = (e) => {
    setEpubFile(e.target.value);
  }
  return (
    <>
      <div className="page-wrapper">

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
                              <img src="/images/profile.png" alt="" height="110" className="rounded-circle"></img>
                              {/* <span className="met-profile_main-pic-change">
                                <i className="fas fa-camera"></i>
                              </span> */}
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
                              <a href="https://qudgus3822.github.io/" className="font-14 text-primary">https://qudgus3822.github.io/</a>
                            </li>
                          </ul>

                        </div>
                      </div>
                    </div>
                    <button type="button" className="btn btn-de-primary float-end" onClick={() => { router.push("/game") }}>게임하러가기</button>
                  </div>


                  <div className="card-body p-0">
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item" >
                        <a className="nav-link" data-bs-toggle="tab" href="#intro" role="tab" aria-selected="false">소개</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" data-bs-toggle="tab" href="#info" role="tab" aria-selected="false">내 정보</a>
                      </li>

                      <li className="nav-item" >
                        <a className="nav-link" data-bs-toggle="tab" href="#front" role="tab" aria-selected="false">Front-end</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" href="#back" role="tab" aria-selected="false">back-end</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" href="#desktop" role="tab" aria-selected="false">desktop</a>
                      </li>

                    </ul>
                    <div className="tab-content">
                      <div className="tab-pane p-3" id="intro" role="tabpanel">
                        <div className="row">
                          <div className="col-12">
                            <div className="card">
                              <div className="card-header">
                                <h7 className="font-15 fw-bold d-block mt-1 mb-1">간단하게 내 소개</h7>
                              </div>
                              <div className="card-body">
                                <p className="font-15 mt-4">
                                  WPF로 키오스크를 개발하여 C# 언어에 대한 깊은 이해를 할 수 있었고 이어서  자사 솔루션 모니터링 시스템을 개발하며 WPF와 더욱 친숙 해 질 수 있었습니다.
                                  2020년 부터는 웹개발도 병행하여 .NET Core 로 항공기상청 모니터링 웹 사이트(AMOS)를 개발하였습니다. AMOS로 웹 개발에도 친숙 해 져 OOZI 개발에서 API 개발을 담당하였고 Du.Plus 앱개발에 참여하여 EPUB, PDF 뷰어 오픈소스를 사용해 전자책 뷰어를 만들었고, NextJs로 프론트엔드 개발에 참여하였습니다.
                                  아파트아이 앱 개발에서는 아파트아이 리뉴얼 개발을 하였고, 꿀단지(아파트 단지 내 중고장터) 를 개발하며 채팅 기능 거래 기능 등을 접할 수 있었습니다.
                                </p>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-6">
                                <div className="card">
                                  <div className="card-header">
                                    <h6 className="font-15 fw-bold d-block mt-1 mb-1">좋아하는 것</h6>
                                  </div>
                                  <div className="card-body">
                                    <p className="font-14 text-muted ms-3">농구
                                    </p>

                                    <p className="font-14 text-muted ms-3">마라탕
                                    </p>

                                    <p className="font-14 text-muted ms-3">치킨
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="card">
                                  <div className="card-header">
                                    <h6 className="font-15 fw-bold d-block mt-1 mb-1">싫어하는 것</h6>
                                  </div>
                                  <div className="card-body">
                                    <p className="font-14 text-muted ms-3">피곤함
                                    </p>
                                    <p className="font-14 text-muted ms-3">반복작업
                                    </p>
                                    <p className="font-14 text-muted ms-3">무력감
                                    </p>

                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane p-3 active" id="info" role="tabpanel">


                        {/* 내가 다닌 학교 시작*/}
                        <div className="row">
                          <div className="col-12">
                            <div className="card">
                              <div className="card-header">
                                <h6 className="font-15 fw-bold d-block mt-1 mb-1">내가 다닌 학교</h6>
                              </div>
                              <div className="card-body">
                                <div className="accordion" id="accordionSchool">
                                  <div className="accordion-item">
                                    <h5 className="accordion-header m-0" id="headingSchoolOne">
                                      <button className="accordion-button fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSchoolOne" aria-expanded="false" aria-controls="collapseSchoolOne">
                                        서령 고등학교
                                      </button>
                                    </h5>
                                    <div id="collapseSchoolOne" className="accordion-collapse collapse" aria-labelledby="headingSchoolOne" data-bs-parent="#accordionSchool">
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
                                    <div id="collapseSchoolTwo" className="accordion-collapse collapse" aria-labelledby="headingSchoolTwo" data-bs-parent="#accordionSchool" >
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
                                <h6 className="font-15 fw-bold d-block mt-1 mb-1">내가 딴 자격증</h6>
                              </div>
                              <div className="card-body">
                                <div className="accordion" id="accordionCertificate">
                                  <div className="accordion-item">
                                    <h5 className="accordion-header m-0" id="headingCertificateOne">
                                      <button className="accordion-button fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCertificateOne" aria-expanded="false" aria-controls="collapseCertificateOne">
                                        정보처리기사
                                      </button>
                                    </h5>
                                    <div id="collapseCertificateOne" className="accordion-collapse collapse" aria-labelledby="headingCertificateOne" data-bs-parent="#accordionCertificate">
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

                      {/* 프론트 시작 */}
                      <div className="tab-pane p-3" id="front" role="tabpanel">
                        <div className="row">
                          <div className="col-12">
                            <div className="card">
                              <div className="card-header">
                                <h6 className="font-15 fw-bold d-block mt-1 mb-1">프로젝트 목록</h6>
                              </div>
                              <div className="card-body">
                                <div className="accordion" id="accordionFront">
                                  <div className="accordion-item">
                                    <h5 className="accordion-header m-0" id="headingProjectOne">
                                      <button className="accordion-button fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseProjectOne" aria-expanded="false" aria-controls="collapseProjectOne">
                                        전자책 뷰어
                                      </button>
                                    </h5>
                                    <div id="collapseProjectOne" className="accordion-collapse collapse" aria-labelledby="headingProjectOne" data-bs-parent="#accordionFront">
                                      <div className="accordion-body">
                                        {/* .epub :  <a href="/nextjs-blog/EbookViewer/epub/web/epub-viewer.html">클릭해서 이동</a> */}
                                        .epub :
                                        {/* <div className="input-group mb-3">
                                          <label className="input-group-text" htmlFor="inputGroupFile01">Epub</label>
                                          <input type="file" className="form-control" id="inputGroupFile01" accept=".epub" onChange={changeEpubFile}></input>
                                        </div> */}
                                        <a href={hosturl + "/nextjs-blog/EbookViewer/epub/web/epub-viewer.html?epub=" + epubUrl}>클릭해서 이동</a>
                                        <br></br>
                                        <br></br>
                                        .PDF :
                                        {/* <div className="input-group mb-3">
                                          <label className="input-group-text" htmlFor="inputGroupFile02">PDF</label>
                                          <input type="file" className="form-control" id="inputGroupFile02"></input>
                                        </div> */}
                                        <a href={hosturl + "/nextjs-blog/EbookViewer/pdf/web/pdf-viewer.html?file=" + pdfUrl}>클릭해서 이동</a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="accordion-item">
                                    <h5 className="accordion-header m-0" id="headingProjectTwo">
                                      <button className="accordion-button fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseProjectTwo" aria-expanded="false" aria-controls="collapseProjectTwo">
                                        아파트아이 앱 개발 참여(Web View)
                                      </button>
                                    </h5>
                                    <div id="collapseProjectTwo" className="accordion-collapse collapse" aria-labelledby="headingProjectTwo" data-bs-parent="#accordionFront" >
                                      <div className="accordion-body">

                                      </div>
                                    </div>
                                  </div>

                                  <div className="accordion-item">
                                    <h5 className="accordion-header m-0" id="headingProjectThree">
                                      <button className="accordion-button fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseProjectThree" aria-expanded="false" aria-controls="collapseProjectThree">
                                        Du.Plus 개발 참여(nextjs)
                                      </button>
                                    </h5>
                                    <div id="collapseProjectThree" className="accordion-collapse collapse" aria-labelledby="headingProjectThree" data-bs-parent="#accordionFront" >
                                      <div className="accordion-body">

                                      </div>
                                    </div>
                                  </div>

                                  <div className="accordion-item">
                                    <h5 className="accordion-header m-0" id="headingProjectFour">
                                      <button className="accordion-button fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseProjectFour" aria-expanded="false" aria-controls="collapseProjectFour">
                                        OOZI 개발 참여
                                      </button>
                                    </h5>
                                    <div id="collapseProjectFour" className="accordion-collapse collapse" aria-labelledby="headingProjectFour" data-bs-parent="#accordionFront" >
                                      <div className="accordion-body">

                                      </div>
                                    </div>
                                  </div>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* 프론트 끝 */}

                      {/* 백 시작 */}
                      <div className="tab-pane p-3" id="back" role="tabpanel">
                        {/* 해본 것들 시작*/}
                        <div className="row">
                          <div className="col-12">
                            <div className="card">
                              <div className="card-header">
                                <h6 className="font-15 fw-bold d-block mt-1 mb-1">프로젝트 목록</h6>
                              </div>
                              <div className="card-body">
                                <div className="accordion" id="accordionBack">
                                  <div className="accordion-item">
                                    <h5 className="accordion-header m-0" id="headingBackProjectOne">
                                      <button className="accordion-button fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBackProjectOne" aria-expanded="false" aria-controls="collapseBackProjectOne">
                                        아파트아이 앱 개발 참여(Web View)
                                      </button>
                                    </h5>
                                    <div id="collapseBackProjectOne" className="accordion-collapse collapse" aria-labelledby="headingBackProjectOne" data-bs-parent="#accordionBack" >
                                      <div className="accordion-body">

                                      </div>
                                    </div>
                                  </div>

                                  <div className="accordion-item">
                                    <h5 className="accordion-header m-0" id="headingBackProjectTwo">
                                      <button className="accordion-button fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBackProjectTwo" aria-expanded="false" aria-controls="collapseBackProjectTwo">
                                        Du.Plus 개발 참여(nextjs)
                                      </button>
                                    </h5>
                                    <div id="collapseBackProjectTwo" className="accordion-collapse collapse" aria-labelledby="headingBackProjectTwo" data-bs-parent="#accordionBack" >
                                      <div className="accordion-body">

                                      </div>
                                    </div>
                                  </div>

                                  <div className="accordion-item">
                                    <h5 className="accordion-header m-0" id="headingBackProjectTwo">
                                      <button className="accordion-button fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBackProjectThree" aria-expanded="false" aria-controls="collapseBackProjectThree">
                                        OOZI 개발 참여
                                      </button>
                                    </h5>
                                    <div id="collapseBackProjectThree" className="accordion-collapse collapse" aria-labelledby="headingBackProjectTwo" data-bs-parent="#accordionBack" >
                                      <div className="accordion-body">

                                      </div>
                                    </div>
                                  </div>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* 백 끝 */}

                      {/* 데스크탑 시작 */}
                      <div className="tab-pane p-3" id="desktop" role="tabpanel">
                        <div className="row">
                          <div className="col-12">
                            <div className="card">
                              <div className="card-header">
                                <h6 className="font-15 fw-bold d-block mt-1 mb-1">프로젝트 목록</h6>

                              </div>
                              <div className="card-body">
                                <div className="accordion" id="accordionDesktop">
                                  <div className="accordion-item">
                                    <h5 className="accordion-header m-0" id="headingDesktopProjectOne">
                                      <button className="accordion-button fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDesktopProjectOne" aria-expanded="false" aria-controls="collapseDesktopProjectOne">
                                        이니스프리 키오스크
                                      </button>
                                    </h5>
                                    <div id="collapseDesktopProjectOne" className="accordion-collapse collapse" aria-labelledby="headingDesktopProjectOne" data-bs-parent="#accordionDesktop">
                                      <div className="accordion-body">

                                      </div>
                                    </div>
                                  </div>

                                  <div className="accordion-item">
                                    <h5 className="accordion-header m-0" id="headingDesktopProjectTwo">
                                      <button className="accordion-button fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDesktopProjectTwo" aria-expanded="false" aria-controls="collapseDesktopProjectTwo">
                                        이니스프리 키오스크 고도화
                                      </button>
                                    </h5>
                                    <div id="collapseDesktopProjectTwo" className="accordion-collapse collapse" aria-labelledby="headingDesktopProjectTwo" data-bs-parent="#accordionDesktop">
                                      <div className="accordion-body">

                                      </div>
                                    </div>
                                  </div>

                                  <div className="accordion-item">
                                    <h5 className="accordion-header m-0" id="headingDesktopProjectThree">
                                      <button className="accordion-button fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDesktopProjectThree" aria-expanded="false" aria-controls="collapseDesktopProjectThree">
                                        BeeCast(신텍정보시스템 자사 솔루션) Notwork Monitoring System 개발
                                      </button>
                                    </h5>
                                    <div id="collapseDesktopProjectThree" className="accordion-collapse collapse" aria-labelledby="headingDesktopProjectThree" data-bs-parent="#accordionDesktop">
                                      <div className="accordion-body">

                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* 데스크탑 끝 */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
}
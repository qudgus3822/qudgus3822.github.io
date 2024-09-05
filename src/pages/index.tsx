import React from "react";
import { useEffect, useState } from "react";
import profile from "../images/profile2.jpg";
import Web from "../components/main-web/Web";
import Info from "../components/main-my-info/Info";
import Introduce from "../components/main-introduce/Introduce";
import Dekstop from "../components/main-desktop/Desktop";
import TraceIndexPage from "../components/main-guestbook";
import BlogIndexPage from "../components/main-blog";
import BlogWritePage from "../components/main-blog/write";
import TraceWritePage from "../components/main-guestbook/write";
declare const naver: any;

export default function IndexPage() {
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
                  {currentTab === "blog" && (
                    <button
                      type="button"
                      className="btn btn-de-dark float-end"
                      onClick={() => {
                        setCurrentTab("blog-write");
                      }}
                    >
                      글쓰기
                    </button>
                  )}
                  {currentTab === "guestbook" && (
                    <button
                      type="button"
                      className="btn btn-de-dark float-end"
                      onClick={() => {
                        setCurrentTab("trace-write");
                      }}
                    >
                      글쓰기
                    </button>
                  )}

                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      <a
                        className={`nav-link ${
                          currentTab === "web" ? "active" : ""
                        }`}
                        onClick={() => setCurrentTab("web")}
                        role="tab"
                        aria-selected={currentTab === "web"}
                      >
                        Web
                      </a>
                    </li>

                    <li className="nav-item">
                      <a
                        className={`nav-link ${
                          currentTab === "desktop" ? "active" : ""
                        }`}
                        onClick={() => setCurrentTab("desktop")}
                        role="tab"
                        aria-selected={currentTab === "desktop"}
                      >
                        desktop
                      </a>
                    </li>

                    <li className="nav-item">
                      <a
                        className={`nav-link ${
                          currentTab === "introduce" ? "active" : ""
                        }`}
                        onClick={() => setCurrentTab("introduce")}
                        role="tab"
                        aria-selected={currentTab === "introduce"}
                      >
                        소개
                      </a>
                    </li>

                    <li className="nav-item">
                      <a
                        className={`nav-link ${
                          currentTab === "info" ? "active" : ""
                        }`}
                        onClick={() => setCurrentTab("info")}
                        role="tab"
                        aria-selected={currentTab === "info"}
                      >
                        내 정보
                      </a>
                    </li>

                    <li className="nav-item">
                      <a
                        className={`nav-link ${
                          currentTab === "blog" ? "active" : ""
                        }`}
                        onClick={() => setCurrentTab("blog")}
                        role="tab"
                        aria-selected={currentTab === "blog"}
                      >
                        블로그
                      </a>
                    </li>

                    <li className="nav-item">
                      <a
                        className={`nav-link ${
                          currentTab === "guestbook" ? "active" : ""
                        }`}
                        onClick={() => setCurrentTab("guestbook")}
                        role="tab"
                        aria-selected={currentTab === "guestbook"}
                      >
                        방명록
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    {currentTab === "web" && <Web />}
                    {currentTab === "info" && <Info />}
                    {currentTab === "introduce" && <Introduce />}
                    {currentTab === "desktop" && <Dekstop />}
                    {currentTab === "blog" && <BlogIndexPage />}
                    {currentTab === "guestbook" && <TraceIndexPage />}

                    {currentTab === "blog-write" && <BlogWritePage />}
                    {currentTab === "trace-write" && <TraceWritePage />}
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

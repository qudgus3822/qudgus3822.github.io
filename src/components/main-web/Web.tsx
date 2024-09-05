import React from "react";
import { useState, useEffect } from "react";
import { content, tab } from "../../types";
import AccordionItem from "../common/AccordionItem";

const Web = () => {
  const [hosturl, setHosturl] = useState("");
  const [epubUrl, setEpubFile] = useState("");
  const [pdfUrl, setPdfFile] = useState("");

  const [currentTab, setCurrentTab] = useState(-1);

  const [tabList, setTabList] = useState<tab[]>([]);
  useEffect(() => {
    if (window) {
      setHosturl(window.location.host);
    }

    setTabList([
      {
        title: "전자책 뷰어",
        contentList: [
          {
            content: "epub",
            link:
              hosturl +
              "/EbookViewer/epub/web/desktop-viewer.html?epub=" +
              epubUrl,
          },
          {
            content: "pdf",
            link:
              hosturl + "/EbookViewer/pdf/web/pdf-viewer.html?file=" + pdfUrl,
          },
        ],
      },

      {
        title: "아파트아이 앱 개발 참여(Web view)",
        contentList: [
          {
            content: "아파트아이 - 아파트 소식 프론트엔드 개발 (80%)",
          },
          {
            content:
              "아파트아이 - 꿀단지(중고마켓) 개발(javascript ,.NET5 , MSSQL, Azure SignalR) (60%)",
          },
        ],
      },

      {
        title: "Du.Plus 개발 참여(nextjs)",
        contentList: [
          {
            content: "du.plus E-Book PC 뷰어 [EPUB, PDF] (100%)",
          },
          {
            content: "App(Web View) 뷰어 개발 [EPUB, PDF] (50%)",
          },
          {
            content: "프론트(next.js) 개발에 참여하였음 (20%)",
          },
        ],
      },

      {
        title: "OOZI 개발 참여",
        contentList: [
          {
            content: "OOZI 의 백엔드 개발(API 개발) .NET REST API (80%)",
          },
        ],
      },
    ]);
  }, []);

  const accodionClickHandler = (e: any) => {
    setCurrentTab(e === currentTab ? -1 : e);
  };

  return (
    <div className="tab-pane p-3 active" id="front" role="tabpanel">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h6 className="font-15 fw-bold d-block mt-1 mb-1">
                프로젝트 목록
              </h6>
            </div>
            <div className="card-body">
              <div className="accordion" id="accordionFront">
                {tabList &&
                  tabList.length > 0 &&
                  tabList.map((tab, index) => {
                    return (
                      <AccordionItem
                        title={tab.title}
                        children={tab.contentList}
                        accodionClickHandler={accodionClickHandler}
                        index={index}
                        key={index}
                        currentTab={currentTab}
                      />
                    );
                  })}
                {/* <div className="accordion-item">
                  <h5 className="accordion-header m-0" id="headingProjectOne">
                    <button
                      onClick={(e) => {
                        accodionClickHandler(0);
                      }}
                      className={`accordion-button fw-semibold ${
                        currentTab !== 0 ? "collapsed" : ""
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseProjectOne"
                      aria-expanded="false"
                      aria-controls="collapseProjectOne"
                    >
                      전자책 뷰어
                    </button>
                  </h5>
                  {hosturl && (
                    <div
                      id="collapseProjectOne"
                      className={`accordion-collapse collapse ${
                        currentTab === 0 ? "show" : ""
                      }`}
                      aria-labelledby="headingProjectOne"
                      data-bs-parent="#accordionFront"
                    >
                      <div className="accordion-body">
                        <ul>
                          <li>
                            epub :{" "}
                            <a
                              href={
                                hosturl +
                                "/EbookViewer/epub/web/desktop-viewer.html?epub=" +
                                epubUrl
                              }
                            >
                              {" "}
                              클릭해서 이동
                            </a>
                          </li>
                          <li>
                            PDF :{" "}
                            <a
                              href={
                                hosturl +
                                "/EbookViewer/pdf/web/pdf-viewer.html?file=" +
                                pdfUrl
                              }
                            >
                              {" "}
                              클릭해서 이동
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
                <div className="accordion-item">
                  <h5 className="accordion-header m-0" id="headingProjectTwo">
                    <button
                      onClick={(e) => {
                        accodionClickHandler(1);
                      }}
                      className={`accordion-button fw-semibold ${
                        currentTab !== 1 ? "collapsed" : ""
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseProjectTwo"
                      aria-expanded="false"
                      aria-controls="collapseProjectTwo"
                    >
                      아파트아이 앱 개발 참여(Web View)
                    </button>
                  </h5>
                  <div
                    id="collapseProjectTwo"
                    className={`accordion-collapse collapse ${
                      currentTab === 1 ? "show" : ""
                    }`}
                    aria-labelledby="headingProjectTwo"
                    data-bs-parent="#accordionFront"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>아파트아이 - 아파트 소식 프론트엔드 개발 (80%)</li>
                        <li>
                          아파트아이 - 꿀단지(중고마켓) 개발(javascript ,.NET5 ,
                          MSSQL, Azure SignalR) (60%)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h5 className="accordion-header m-0" id="headingProjectThree">
                    <button
                      onClick={(e) => {
                        accodionClickHandler(2);
                      }}
                      className={`accordion-button fw-semibold ${
                        currentTab !== 2 ? "collapsed" : ""
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseProjectThree"
                      aria-expanded="false"
                      aria-controls="collapseProjectThree"
                    >
                      Du.Plus 개발 참여(nextjs)
                    </button>
                  </h5>
                  <div
                    id="collapseProjectThree"
                    className={`accordion-collapse collapse ${
                      currentTab === 2 ? "show" : ""
                    }`}
                    aria-labelledby="headingProjectThree"
                    data-bs-parent="#accordionFront"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>du.plus E-Book PC 뷰어 [EPUB, PDF] (100%)</li>
                        <li>App(Web View) 뷰어 개발 [EPUB, PDF] (50%)</li>
                        <li>프론트(next.js) 개발에 참여하였음 (20%)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h5 className="accordion-header m-0" id="headingProjectFour">
                    <button
                      onClick={(e) => {
                        accodionClickHandler(3);
                      }}
                      className={`accordion-button fw-semibold ${
                        currentTab !== 3 ? "collapsed" : ""
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseProjectFour"
                      aria-expanded="false"
                      aria-controls="collapseProjectFour"
                    >
                      OOZI 개발 참여
                    </button>
                  </h5>
                  <div
                    id="collapseProjectFour"
                    className={`accordion-collapse collapse ${
                      currentTab === 3 ? "show" : ""
                    }`}
                    aria-labelledby="headingProjectFour"
                    data-bs-parent="#accordionFront"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>
                          OOZI 의 백엔드 개발(API 개발) .NET REST API (80%)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web;

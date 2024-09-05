import React, { useEffect, useState } from "react";
import { tab } from "../../types";
import AccordionItem from "../common/AccordionItem";

const Dekstop = () => {
  const [currentTab, setCurrentTab] = useState(-1);

  const [tabList, setTabList] = useState<tab[]>([]);
  useEffect(() => {
    setTabList([
      {
        title: "이니스프리 키오스크",
        contentList: [
          {
            content:
              "WPF를 이용해 이니스프리 매장 내 안내 키오스크 개발 (100%)",
          },
          {
            content:
              "이니스프리 스마트그린어스 API 연동 및 키오스크 고도화, 수정 사항 개발 (100%)",
          },
        ],
      },

      {
        title:
          "BeeCast(신텍정보시스템 자사 솔루션) Network Monitoring System 개발",
        contentList: [
          {
            content: "BeeCast네트워크 모니터링 시스템 개발(WPF) (100%)",
          },
        ],
      },
    ]);
  }, []);

  const accodionClickHandler = (e: any) => {
    setCurrentTab(e === currentTab ? -1 : e);
  };

  return (
    <div className="tab-pane p-3 active" role="tabpanel">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h6 className="font-15 fw-bold d-block mt-1 mb-1">
                프로젝트 목록
              </h6>
            </div>
            <div className="card-body">
              <div className="accordion" id="accordionDesktop">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dekstop;

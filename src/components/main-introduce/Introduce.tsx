import React from "react";
const Introduce = () => {
  return (
    <div className="tab-pane p-3 active" id="intro" role="tabpanel">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h6 className="font-15 fw-bold d-block mt-1 mb-1">
                간단하게 내 소개
              </h6>
            </div>
            <div className="card-body">
              <p className="font-15 mt-4">
                WPF로 키오스크를 개발하여 C# 언어에 대한 깊은 이해를 할 수
                있었고 이어서 자사 솔루션 모니터링 시스템을 개발하며 WPF와 더욱
                친숙 해 질 수 있었습니다. 2020년 부터는 웹개발도 병행하여 .NET
                Core 로 항공기상청 모니터링 웹 사이트(AMOS)를 개발하였습니다.
                AMOS로 웹 개발에도 친숙 해 져 OOZI 개발에서 API 개발을
                담당하였고 Du.Plus 앱개발에 참여하여 EPUB, PDF 뷰어 오픈소스를
                사용해 전자책 뷰어를 만들었고, NextJs로 프론트엔드 개발에
                참여하였습니다. 아파트아이 앱 개발에서는 아파트아이 리뉴얼
                개발을 하였고, 꿀단지(아파트 단지 내 중고장터) 를 개발하며 채팅
                기능 거래 기능 등을 접할 수 있었습니다.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <div className="card">
                <div className="card-header">
                  <h6 className="font-15 fw-bold d-block mt-1 mb-1">
                    좋아하는 것
                  </h6>
                </div>
                <div className="card-body">
                  <p className="font-14 text-muted ms-3">농구</p>

                  <p className="font-14 text-muted ms-3">독서</p>

                  <p className="font-14 text-muted ms-3">맛집탐방</p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card">
                <div className="card-header">
                  <h6 className="font-15 fw-bold d-block mt-1 mb-1">
                    싫어하는 것
                  </h6>
                </div>
                <div className="card-body">
                  <p className="font-14 text-muted ms-3">피곤함</p>
                  <p className="font-14 text-muted ms-3">반복작업</p>
                  <p className="font-14 text-muted ms-3">무력감</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;

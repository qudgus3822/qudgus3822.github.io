import React, { useEffect, useState } from "react";
declare const naver: any;

const Info = () => {
  const [highSchoolMap, setHighSchoolMap] = useState<any>(null);
  const [universityMap, setUniversityMap] = useState<any>(null);
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=b15q7nzk9p";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (!naver) {
        return;
      }
      setHighSchoolMap(
        new naver.maps.Map("mapHighSchool", {
          center: new naver.maps.LatLng(36.7935697, 126.4587419),
          zoom: 15,
        })
      );
      setUniversityMap(
        new naver.maps.Map("mapUniversity", {
          center: new naver.maps.LatLng(36.8374266, 127.1687229),
          zoom: 15,
        })
      );
    };
    return () => {
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    if (!highSchoolMap || !universityMap || !naver) {
      return;
    }
    new naver.maps.Marker({
      position: new naver.maps.LatLng(36.7935697, 126.4587419),
      map: highSchoolMap,
    });
    new naver.maps.Marker({
      position: new naver.maps.LatLng(36.8374266, 127.1687229),
      map: universityMap,
    });
  }, [highSchoolMap, universityMap]);

  return (
    <div className="tab-pane p-3 active" role="tabpanel">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h6 className="font-15 fw-bold d-block mt-1 mb-1">
                내가 다닌 학교
              </h6>
            </div>
            <div className="card-body">
              <div className="accordion" id="accordionSchool">
                <div className="row">
                  <div className="accordion-item col-6">
                    <h5
                      className="accordion-header checkout-accordion m-0"
                      id="headingSchoolTwo"
                    >
                      <button
                        className="accordion-button fw-semibold"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSchoolTwo"
                        aria-expanded="false"
                        aria-controls="collapseSchoolTwo"
                      >
                        단국대학교(천안)
                      </button>
                    </h5>
                    <div
                      id="collapseSchoolTwo"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingSchoolTwo"
                      data-bs-parent="#accordionSchool"
                    >
                      <div className="accordion-body">
                        위치 : <br></br>
                        <div
                          id="mapUniversity"
                          className="gmaps"
                          style={{
                            position: "relative",
                            overflow: "hidden",
                            width: "30vw",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item col-6">
                    <h5
                      className="accordion-header checkout-accordion m-0"
                      id="headingSchoolOne"
                    >
                      <button
                        className="accordion-button fw-semibold"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSchoolOne"
                        aria-expanded="false"
                        aria-controls="collapseSchoolOne"
                      >
                        서령 고등학교
                      </button>
                    </h5>
                    <div
                      id="collapseSchoolOne"
                      className="accordion-collapse show"
                      aria-labelledby="headingSchoolOne"
                      data-bs-parent="#accordionSchool"
                    >
                      <div className="accordion-body">
                        위치 : <br></br>
                        <div
                          id="mapHighSchool"
                          className="gmaps"
                          style={{
                            position: "relative",
                            overflow: "hidden",
                            width: "30vw",
                          }}
                        ></div>
                      </div>
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
              <h6 className="font-15 fw-bold d-block mt-1 mb-1">
                내가 딴 자격증
              </h6>
            </div>
            <div className="card-body">
              <div className="accordion" id="accordionCertificate">
                <div className="accordion-item">
                  <h5
                    className="accordion-header m-0 checkout-accordion"
                    id="headingCertificateOne"
                  >
                    <button
                      className="accordion-button fw-semibold collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseCertificateOne"
                      aria-expanded="false"
                      aria-controls="collapseCertificateOne"
                    >
                      정보처리기사
                    </button>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 내가 딴 자격증! 끝 */}
    </div>
  );
};

export default Info;

import { useRouter } from "next/router";
import React from "react";
export default function TraceHeader() {
  const router = useRouter();

  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <div className="page-title-box">
            <div className="float-end">
              <button
                type="button"
                className="btn btn-de-dark"
                onClick={() => {
                  router.push("/trace/write");
                }}
              >
                글쓰기
              </button>
            </div>
            <h4 className="page-title">발자취</h4>
          </div>
        </div>
      </div>
    </>
  );
}

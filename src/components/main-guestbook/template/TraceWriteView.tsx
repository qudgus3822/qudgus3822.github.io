import { useRouter } from "next/router";
import { useState } from "react";
import React from "react";

import {
  setFirebaseData,
  getFirebaseData,
  pushFirebaseData,
} from "../../../utils/firebase";
import { getBase64 } from "../../../utils/common";
import { toast } from "react-toastify";
export default function TraceWriteView() {
  const [name, setName] = useState("");
  const [contents, setContents] = useState("");

  const handleChange = (e: any) => {
    let file = e.target.files[0];
    let reader = getBase64(file);
    reader.then((result: string) => {});
  };

  const writeComplete = () => {
    const today = new Date();
    pushFirebaseData("traces/", {
      name: name,
      contents: contents,
      date: today.toLocaleString(),
    }).then((res: any) => {
      resetData();
      toast.success("글쓰기 완료");
    });
  };

  const resetData = () => {
    setName("");
    setContents("");
  };
  return (
    <>
      <div className="row">
        <div className="card">
          <div className="card-header">
            <div className="float-end">
              {/* <ol className="breadcrumb">
                            <li className="breadcrumb-item active">Blogs</li>
                        </ol> */}
              <button
                type="button"
                className="btn btn-de-dark"
                onClick={writeComplete}
              >
                작성완료
              </button>
            </div>
            <h4
              className="card-title"
              style={{ fontSize: "30px", marginTop: "10px" }}
            >
              발자취 남기기
            </h4>
            {/* <p className="text-muted mb-0"></p> */}
          </div>

          <div className="card-body">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1">이름</label>
                <input
                  type=""
                  className="form-control"
                  id="exampleFormControlInput1"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  value={name}
                ></input>
              </div>

              <div className="">
                <label htmlFor="exampleFormControlTextarea1">내용</label>
                <textarea
                  onChange={(e) => {
                    setContents(e.target.value);
                  }}
                  value={contents}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                ></textarea>
              </div>

              {/* <img style={{ maxWidth: "400px" }} src={imgSrc}></img>

                            <div className="d-grid">
                                <div className="preview-box d-block justify-content-center rounded shadow overflow-hidden bg-light p-1"></div>
                                <input type="file" id="input-file" name="input-file" accept="image/*" onChange={handleChange}></input>
                                <label className="btn-upload btn btn-primary mt-4" htmlFor="input-file">Upload Image</label>
                            </div> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

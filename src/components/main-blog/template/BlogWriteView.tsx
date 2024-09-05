import React from "react";
import { useState } from "react";
import { getBase64 } from "../../../utils/common";
import { useRouter } from "next/router";
import {
  setFirebaseData,
  getFirebaseData,
  pushFirebaseData,
} from "../../../utils/firebase";
import { toast } from "react-toastify";
export default function BlogWriteView() {
  const [imgSrc, setImgSrc] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (e: any) => {
    let file = e.target.files[0];
    let reader = getBase64(file);
    reader.then((result) => {
      setImgSrc(result);
    });
  };

  const writeComplete = () => {
    pushFirebaseData("blogs/", {
      subject: subject,
      description: description,
      image: imgSrc,
    }).then((res) => {
      resetAll();
      toast.success("글쓰기 완료");
    });
  };

  const resetAll = () => {
    setSubject("");
    setDescription("");
    setImgSrc("");
  };
  return (
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
            블로그 글쓰기
          </h4>
          {/* <p className="text-muted mb-0"></p> */}
        </div>

        <div className="card-body">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1">제목</label>
              <input
                type=""
                className="form-control"
                id="exampleFormControlInput1"
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                value={subject}
              ></input>
            </div>
            {/* <div className="mb-3">
                                <label htmlFor="exampleFormControlSelect1">설명</label>
                                <select className="form-select" id="exampleFormControlSelect1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlSelect2">Example multiple select</label>
                                <select multiple="" className="form-select" id="exampleFormControlSelect2">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div> */}
            <div className="">
              <label htmlFor="exampleFormControlTextarea1">설명</label>
              <textarea
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                value={description}
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
              ></textarea>
            </div>

            <img style={{ maxWidth: "400px" }} src={imgSrc}></img>

            <div className="d-grid">
              <div className="preview-box d-block justify-content-center rounded shadow overflow-hidden bg-light p-1"></div>
              <input
                type="file"
                id="input-file"
                name="input-file"
                accept="image/*"
                onChange={handleChange}
                value={imgSrc}
              ></input>
              <label
                className="btn-upload btn btn-primary mt-4"
                htmlFor="input-file"
              >
                Upload Image
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

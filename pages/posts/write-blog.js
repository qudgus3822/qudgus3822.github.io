// import { useEffect, useState } from "react";
// import Router from "next/router";
// export default function WriteBlog() {
//     const [loading, setLoading] = useState(true);
//     const [errorMsg, setErrorMsg] = useState("");
//     useEffect(() => {
//         let script = document.querySelector(
//             `script[src="/assets/js/app.js"]`
//         );

//         if (!script) {
//             script = document.createElement("script");
//             script.src = "/assets/js/app.js";
//             script.async = true;
//             document.body.appendChild(script);
//         }

//         const handleLoad = () => setLoading(false);

//         script.addEventListener("load", handleLoad);

//         return () => {
//             script.removeEventListener("load", handleLoad);
//         };
//     }, []);

//     async function submit(e) {
//         e.preventDefault();
//         const body = {
//             subject: e.currentTarget.subject.value,
//             content: e.currentTarget.content.value,
//             writer: e.currentTarget.writer.value,
//             blogImage: e.currentTarget.blogImage.value,
//             category: e.currentTarget.category.value
//         };
//         if (typeof window != "undefined") {

//             const res = await fetch(window.location.protocol + "//" + window.location.host + "/api/writeBlog", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(body),
//             });
//             if (res.status === 201) {
//                 const userObj = await res.json();
//                 mutate(userObj);
//             } else {
//                 setErrorMsg(await res.text());

//             }
//         }
//     }
//     const style = {
//         marginTop: "20px"
//     }
//     return (<>
//         <div className="page-wrapper" style={{ marginTop: "10vh" }}>
//             {errorMsg}
//             <div className="page-content-tab">
//                 <div className="container-fluid">
//                     <button className="btn btn-de-primary" style={{ marginBottom: "20px" }} onClick={() => Router.back()}>뒤로</button>
//                     <div className="card">
//                         <div className="card-header">
//                             <h4 className="card-title">블로그 글쓰기</h4>
//                             <p className="text-muted mb-0">나만의 글쓰기</p>
//                         </div>
//                         <div className="card-body">
//                             <form className="" onSubmit={submit.bind(this)}>
//                                 <div className="row">
//                                     <div className="col-md-4">
//                                         <div className="mb-3">
//                                             <label>글쓴이</label>
//                                             <div>
//                                                 <select id="writer" className="form-select" aria-label="Default select example">
//                                                     <option value="김병현" defaultValue>김병현</option>
//                                                     <option value="김양홍">김양홍</option>

//                                                 </select>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="col-md-4">
//                                         <div className="mb-3">
//                                             <label>카테고리</label>
//                                             <div>
//                                                 <select id="category" className="form-select" aria-label="Default select example">
//                                                     <option value="일상" defaultValue>일상</option>
//                                                     <option value="코드">코드</option>
//                                                     <option value="데이트">데이트</option>
//                                                     <option value="농구">농구</option>
//                                                 </select>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="col-md-4">
//                                         <div className="mb-3">
//                                             <label>이미지</label>
//                                             <div>
//                                                 <select id="blogImage" className="form-select" aria-label="Default select example">
//                                                     <option value="1" defaultValue>성기사</option>
//                                                     <option value="2">딸기</option>
//                                                     <option value="3">쏙독새</option>
//                                                     <option value="4">음식</option>
//                                                     <option value="5">커피</option>
//                                                     <option value="6">여자</option>

//                                                 </select>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="row">
//                                     <div className="col-md-12">
//                                         <div className="mb-3">
//                                             <label htmlFor="subject">제목</label>
//                                             <input type="text" className="form-control" id="subject" required=""></input>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="row">
//                                     <div className="col-md-12">
//                                         <div className="mb-3">
//                                             <label htmlFor="message">내용</label>
//                                             <textarea className="form-control" rows="5" id="content"></textarea>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="row">
//                                     <div className="col-sm-12 text-end">
//                                         <button type="submit" className="btn btn-de-primary px-4">글 등록</button>
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </>)

// }
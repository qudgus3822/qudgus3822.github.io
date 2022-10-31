import { useEffect, useState } from "react";
import BlogBox from "../../components/posts/blogBox";
export default function Blogs() {
  const [loading, setLoading] = useState(true);

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

    const handleLoad = () => setLoading(false);

    script.addEventListener("load", handleLoad);

    return () => {
      script.removeEventListener("load", handleLoad);
    };
  }, []);

  const test = [];
  let obj = {};
  obj.content = "test 게시글입니다.";
  obj.subject = "테스트 제목입니다.";
  obj.category = "테스트";
  obj.blogImage = 1;
  obj.key = 1;
  test.push(obj);

  obj = {};
  obj.content = "test 게시글입니다.2";
  obj.subject = "테스트 제목입니다.2";
  obj.category = "테스트2";
  obj.blogImage = 2;
  obj.key = 2;
  test.push(obj);

  obj = {};
  obj.content = "test 게시글입니다.3";
  obj.subject = "테스트 제목입니다.3";
  obj.category = "테스트3";
  obj.blogImage = 3;
  obj.key = 3;
  test.push(obj);

  obj = {};
  obj.content = "test 게시글입니다.4";
  obj.subject = "테스트 제목입니다.4";
  obj.category = "테스트4";
  obj.blogImage = 4;
  obj.key = 4;
  test.push(obj);

  obj = {};
  obj.content = "test 게시글입니다.5";
  obj.subject = "테스트 제목입니다.5";
  obj.category = "테스트5";
  obj.blogImage = 5;
  obj.key = 5;
  test.push(obj);

  obj = {};
  obj.content = "test 게시글입니다.6";
  obj.subject = "테스트 제목입니다.6";
  obj.category = "테스트5";
  obj.blogImage = 6;
  obj.key = 6;
  test.push(obj);

  const test2 = [...test];
  const t = test2.reduce((acc, cur) => {
    const arr = acc[acc.length - 1];

    arr.push(cur);
    if (arr.length == 3) {
      acc.push([]);
    }
    return acc;
  }, [[]])

  // test2.reduce((acc, cur) => {
  //   const arr = acc[acc.length - 1];
  //   arr.push(cur);
  //   if (arr.length % 3 == 0) {
  //     acc.push([]);
  //     return acc;
  //   }
  // }, [[]]).filter((chunc) => chunc.length).map((c, i) => {
  //   <div className="col-lg-4">
  //     {c.map((cc, ii) => {
  //       <BlogBox {...cc}></BlogBox>
  //     })}
  //   </div>
  // })


  return (
    <>
      <div className="page-wrapper">
        <div className="page-content-tab">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-title-box">
                  <div className="float-end">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="#">Pages</a></li>
                      <li className="breadcrumb-item active">Blogs</li>
                    </ol>
                  </div>
                  <h4 className="page-title">김병현의 개인 Blogs</h4>
                </div>
              </div>
            </div>
            <div className="row">

              {

                t.map((data, i) => {
                  return (<div key={i} className="row">
                    {data.map((c, i) => {
                      return (<BlogBox key={c.key.toString()} {...c}></BlogBox>)
                    })}
                  </div>)

                })}
            </div>

          </div>

        </div>
      </div></>


  );
}

import React, { useState, useEffect } from "react";
import Head from "next/head";
import Router from "next/router";
import { useCurrentUser } from "../hooks/index";

const SignupPage = () => {
  const [user, { mutate }] = useCurrentUser();
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    // redirect to home if user is authenticated
    if (user) Router.replace("/posts/first-post");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      email: e.currentTarget.email.value,
      name: e.currentTarget.name.value,
      password: e.currentTarget.password.value,
    };
    if (typeof window != "undefined") {
    
      const res = await fetch(window.location.protocol + "//" + window.location.host + "/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.status === 201) {
        const userObj = await res.json();
        mutate(userObj);
      } else {
        setErrorMsg(await res.text());
      }
    }


    // insertUser()
  };

  return (
    <>
      <Head>
        <title>Sign up</title>
      </Head>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold mb-5">가입하기</h1>
        <div className="col-lg-6 mx-auto">
          <form onSubmit={handleSubmit}>
            {errorMsg ? <p style={{ color: "red" }}>{errorMsg}</p> : null}
            <div className="form-floating mb-2">
              <input
                id="name"
                type="text"
                name="name"
                className="form-control"
                placeholder="이름"
              />
              <label forhtml="name">이름</label>
            </div>
            <div className="form-floating mb-2">
              <input
                id="email"
                name="email"
                type="email"
                className="form-control"
                placeholder="이메일 주소"
              />
              <label forhtml="email">이메일 주소</label>
            </div>
            <div className="form-floating mb-2">
              <input
                id="password"
                name="password"
                type="password"
                className="form-control"
                placeholder="비밀번호"
              />
              <label forhtml="password">비밀번호</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary mb-2" type="submit">
              가입하기
            </button>
          </form>
          <button
            type="button"
            className="w-100 btn btn-lg btn-secondary px-4 gap-3"
            onClick={() => Router.replace("/")}
          >
            홈으로
          </button>
        </div>
      </div>
    </>
  );
};

export default SignupPage;

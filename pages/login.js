import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCurrentUser } from "../hooks/index";

const LoginPage = () => {
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState("");
  const [user, { mutate }] = useCurrentUser();
  useEffect(() => {
    // redirect to home if user is authenticated
    if (user) router.push("/posts/first-post");
  }, [user]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const body = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };
    if (typeof window != "undefined") {

      const res = await fetch(window.location.protocol + "//" + window.location.host + "/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.status === 200) {
        const userObj = await res.json();
        mutate(userObj);
      } else {
        setErrorMsg("Incorrect username or password. Try again!");
      }
    }
  }

  return (
    <>
      <Head>
        <title>로그인</title>
      </Head>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold mb-5">로그인</h1>
        <div className="col-lg-6 mx-auto">
          <form onSubmit={onSubmit}>
            {errorMsg ? <p style={{ color: "red" }}>{errorMsg}</p> : null}
            <div className="form-floating mb-2">
              <input
                name="id"
                type="email"
                className="form-control"
                placeholder="아이디"
              />
              <label forhtml="id">아이디</label>
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
              로그인
            </button>
          </form>
          <button
            type="button"
            className="w-100 btn btn-lg btn-secondary px-4 gap-3"
            onClick={() => router.replace("/")}
          >
            홈으로
          </button>
          <Link href="/forget-password">
            Forget password
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

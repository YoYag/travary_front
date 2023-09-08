import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="text-center my-4 w-1/4">
      <h1 className="text-2xl font-bold">로그인 페이지</h1>
      <div action="form-controll">
        <label className="input-group input-group-sm my-4">
          <span className="w-1/3">아이디</span>
          <input
            type="text"
            name="identifier"
            placeholder="ID를 입력해주세요"
            className="input input-bordered input-sm w-full"
          />
        </label>
        <label className="input-group input-group-sm my-4">
          <span className="w-1/3">비밀번호</span>
          <input
            type="password"
            name="password"
            placeholder="Password를 입력해주세요"
            className="input input-bordered input-sm w-full"
          />
        </label>
        <div className="form-control">
          <button className="btn my-2">로그인</button>
          <Link to={`/sign_up`}>
            <button className="btn my-2 w-full">회원가입</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

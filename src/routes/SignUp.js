import React from "react";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [error, setError] = useState(null);

  // 유저정보
  const [userInfo, setUserInfo] = useState({
    username: "",
    identifier: "",
    password: "",
    confirmPassword: "",
    email: "",
    role: "",
    createDate: "",
  });

  // 회원가입
  const postJoinData = async () => {
    try {
      const data = await axios({
        url: "http://localhost:8080/join",
        method: "POST",
        data: {
          username: userInfo.username,
          identifier: userInfo.identifier,
          password: userInfo.password,
          email: userInfo.email,
          role: userInfo.role,
          createDate: userInfo.createDate,
        },
      });
      console.log(data);
    } catch (e) {
      setError(e);
    }
  };

  if (error) {
    return <span>{error.message}</span>;
  }

  const test = () => {
    console.log(userInfo);
  };

  return (
    <div className="text-center my-4 w-1/2">
      <button className="btn" onClick={test}>
        데이터 확인
      </button>
      <h1 className="text-2xl font-bold">회원가입 페이지</h1>
      <div action="form-control">
        <label className="input-group input-group-sm my-4">
          <span className="w-1/3">이름</span>
          <input
            type="text"
            name="username"
            onChange={(e) => {
              setUserInfo({
                ...userInfo,
                username: e.target.value,
              });
            }}
            placeholder="이름을 입력해주세요"
            className="input input-bordered input-sm w-full"
          />
        </label>
        <label className="input-group input-group-sm my-4">
          <span className="w-1/3">아이디</span>
          <input
            type="text"
            name="identifier"
            onChange={(e) => {
              setUserInfo({
                ...userInfo,
                identifier: e.target.value,
              });
            }}
            placeholder="ID를 입력해주세요"
            className="input input-bordered input-sm w-full"
          />
        </label>
        <label className="input-group input-group-sm my-4">
          <span className="w-1/3">비밀번호</span>
          <input
            type="password"
            name="password"
            onChange={(e) => {
              setUserInfo({
                ...userInfo,
                password: e.target.value,
              });
            }}
            placeholder="Password를 입력해주세요"
            className="input input-bordered input-sm w-full"
          />
        </label>
        <label className="input-group input-group-sm my-4">
          <span className="w-1/3">비밀번호 확인</span>
          <input
            type="password"
            name="confirm_password"
            onChange={(e) => {
              setUserInfo({
                ...userInfo,
                confirmPassword: e.target.value,
              });
            }}
            placeholder="Password를 입력해주세요"
            className="input input-bordered input-sm w-full"
          />
        </label>
        <label className="input-group input-group-sm my-4">
          <span className="w-1/3">이메일</span>
          <input
            type="text"
            name="email"
            onChange={(e) => {
              setUserInfo({
                ...userInfo,
                email: e.target.value,
              });
            }}
            placeholder="email를 입력해주세요"
            className="input input-bordered input-sm w-full"
          />
        </label>
        <div className="form-control">
          <button className="btn my-2" onClick={postJoinData}>
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

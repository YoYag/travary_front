import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const showMain = () => {
    navigate(`/`);
  };

  return (
    <div className="w-full border-b">
      <div className="py-4 flex border-b justify-between">
        <div className="cursor-pointer" onClick={showMain}>
          <p>나의 여행일기</p>
          <p className="text-4xl font-bold">Travary</p>
        </div>
        <div className="w-48 flex justify-between items-center">
          <Link to={`/sign_in`}>
            <button className="btn btn-outline">로그인</button>
          </Link>
          <Link to={`/sign_up`}>
            <button className="btn btn-outline">회원가입</button>
          </Link>
        </div>
      </div>
      <div className="flex">
        <nav className="flex w-full justify-center">
          <ul className="menu py-0 menu-horizontal bg-base-100 text-base">
            <li>
              <Link to={`/`} className="rounded-none">
                메인
              </Link>
            </li>
            <li>
              <Link to={`/plan`} className="rounded-none">
                계획
              </Link>
            </li>
            <li>
              <Link to={`/meet`} className="rounded-none">
                만남
              </Link>
            </li>
            <li>
              <Link to={`/diary`} className="rounded-none">
                일기
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import { useState, useEffect } from "react";

const PlanRoute = () => {
  const [countDate, setCountDate] = useState([]);
  const [dayCurrentIndex, setDayCurrentIndex] = useState(0);
  const [dayPlaceSchedule, setDayPlaceSchedule] = useState({});

  const [planInfo, setPlanInfo] = useState({
    startPlan: "",
    endPlan: "",
    countDate: "",
    dayPlaceSchedule: "",
  });

  // 날짜 계산
  const startDate = new Date(planInfo.startPlan.split("-"));
  const endDate = new Date(planInfo.endPlan.split("-"));
  const dif = endDate - startDate;
  const timeSchedule = dif / 24 / 60 / 60 / 1000; // 시 * 분 * 초 * 밀리세컨

  const countDatePlan = () => {
    let newArr = [];
    let newDayArr = [];
    for (let i = 0; i <= timeSchedule; i++) {
      newArr.push(i);
      newDayArr.push([]);
    }
    setCountDate(newArr);
    setDayPlaceSchedule(newDayArr);
    setPlanInfo({
      ...planInfo,
      countDate: JSON.stringify(newArr),
    });
  };

  useEffect(() => {
    countDatePlan();
    console.log(endDate);
  }, [dayCurrentIndex]);

  const countList = countDate.map((day, i) => (
    <li
      key={i}
      className={i === dayCurrentIndex ? "border-l-2 border-current" : ""}
      onClick={() => {
        setDayCurrentIndex(i);
      }}
    >
      <button className="p-1 rounded-none text-center block">
        <p>{day + 1}</p>
        <p>일차</p>
      </button>
    </li>
  ));

  // console.log("PlanRoute");

  return (
    <div className="w-full border-r relative">
      <input
        type="date"
        name="start"
        className="w-1/2 p-0 input-sm text-center"
        onChange={(e) => {
          planInfo.startPlan = e.target.value;
          countDatePlan();
        }}
      />
      <input
        type="date"
        name="end"
        className="w-1/2 p-0 input-sm text-center"
        onChange={(e) => {
          planInfo.endPlan = e.target.value;
          countDatePlan();
        }}
      />
      <div className="flex w-full h-list-custom">
        <ul className="menu p-0 block w-8 overflow-y-auto scrollbar">
          {countList}
        </ul>
      </div>
      <button className="btn btn-outline btn-neutral btn-sm w-full absolute bottom-0">
        작업완료
      </button>
    </div>
  );
};

export default PlanRoute;

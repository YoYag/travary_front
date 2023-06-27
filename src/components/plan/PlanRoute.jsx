import React, { useCallback, useMemo } from "react";
import { useState, useEffect } from "react";

const PlanRoute = () => {
  const [countNum, setCountNum] = useState([]);
  const [dayCurrentIndex, setDayCurrentIndex] = useState(0);
  const [dayPlaceSchedule, setDayPlaceSchedule] = useState({});

  const planInfo = useMemo(
    () => ({
      startPlan: "",
      endPlan: "",
      countDate: "",
      dayPlaceSchedule: "",
    }),
    []
  );

  const countDatePlan = useCallback(() => {
    // 날짜 계산
    const startDate = new Date(planInfo.startPlan.split("-"));
    const endDate = new Date(planInfo.endPlan.split("-"));
    const dif = endDate - startDate;
    const timeSchedule = dif / 24 / 60 / 60 / 1000; // 시 * 분 * 초 * 밀리세컨

    let newCountArr = [];
    let newScheduleArr = [];
    for (let i = 0; i <= timeSchedule; i++) {
      newCountArr.push(i);
      newScheduleArr.push([]);
    }
    setCountNum(newCountArr);
    setDayPlaceSchedule(newScheduleArr);
    planInfo.countDate = JSON.stringify(newCountArr);
  }, [planInfo]);

  useEffect(() => {
    countDatePlan();
    console.log("effect 실행");
  }, [countDatePlan, planInfo.startPlan, planInfo.endPlan]);

  const showData = () => {
    console.log(dayPlaceSchedule);
  };

  const countList = countNum.map((day, i) => (
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
      <button
        className="btn btn-outline btn-neutral btn-sm w-full absolute bottom-0"
        onClick={showData}
      >
        작업완료
      </button>
    </div>
  );
};

export default PlanRoute;

import React from "react";
import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { URL } from "../../util/url";
import Modal from "../Modal";

const PlanRoute = ({
  dayCurrentIndex,
  setDayCurrentIndex,
  dayPlaceSchedule,
  setDayPlaceSchedule,
  planInfo,
}) => {
  const [countNum, setCountNum] = useState([]);

  const postPlan = async () => {
    try {
      await axios({
        url: `${URL}/api/plan/create`,
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },
        data: {
          startPlan: planInfo.startPlan,
          endPlan: planInfo.endPlan,
          countDate: planInfo.countDate,
          dayPlaceSchedule: planInfo.dayPlaceSchedule,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

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
  }, [planInfo, setDayPlaceSchedule]);

  useEffect(() => {
    countDatePlan();
  }, [countDatePlan, planInfo.startPlan, planInfo.endPlan]);

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

  const planList = countNum.map((day, i) => (
    <li
      key={i}
      className={
        i === dayCurrentIndex
          ? "absolute min-h-full w-full z-10"
          : "absolute invisible max-h-0 overflow-y-auto w-full"
      }
    >
      <ul className="steps steps-vertical">
        {dayPlaceSchedule[day].map((place, i) => (
          <li
            key={i}
            className="step step-neutral cursor-pointer"
            onClick={() => {
              let newScheduleArr = [...dayPlaceSchedule];
              newScheduleArr[dayCurrentIndex].splice(i, 1);
              setDayPlaceSchedule(newScheduleArr);
              planInfo.dayPlaceSchedule = JSON.stringify(dayPlaceSchedule);
            }}
          >
            <p className="text-left">{place}</p>
          </li>
        ))}
      </ul>
    </li>
  ));

  console.log("PlanRoute");

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
        <ul className="menu p-0 block overflow-y-auto scrollbar">
          {countList}
        </ul>
        <ul className="relative w-full overflow-y-auto scrollbar">
          {planList}
        </ul>
      </div>
      <button
        className="btn btn-outline btn-neutral btn-sm w-full absolute bottom-0"
        onClick={() => {
          window.my_modal_3.showModal();
        }}
      >
        작업완료
      </button>
      <Modal
        modalId="my_modal_3"
        modalTitle="여행 일정을 저장하시겠습니까?"
        modalContent="작성하신 여행일정은 상세페이지에서 수정 및 삭제 가능합니다."
        buttonContent="저장하기"
        postData={postPlan}
        linkTo={`/planDetail`}
      />
    </div>
  );
};

export default PlanRoute;

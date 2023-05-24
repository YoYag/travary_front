import React from "react";
import Map from "../components/map/Map";
import PlanBox from "../components/plan/PlanBox";

const CreatePlan = () => {
  return (
    <div className="w-full h-75vh flex">
      <PlanBox />
      <Map />
    </div>
  );
};

export default CreatePlan;

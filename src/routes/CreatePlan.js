import React from "react";
import { useState } from "react";
import Map from "../components/map/Map";
import PlanRoute from "../components/plan/PlanRoute";
import SearchMap from "../components/plan/SearchMap";

const CreatePlan = () => {
  const [apiReady, setApiReady] = useState(false);
  const [mapData, setMapData] = useState("");
  const [mapApiData, setMapApiData] = useState("");

  const showData = () => {
    console.log("apiReady = ", apiReady);
    console.log("mapData = ", mapData);
    console.log("mapApiData = ", mapApiData);
  };

  return (
    <div className="w-full h-75vh flex">
      <div className="w-1/2 flex">
        <PlanRoute />
        <SearchMap />
      </div>
      <Map
        setApiReady={setApiReady}
        setMapData={setMapData}
        setMapApiData={setMapApiData}
      />
      <button className={"btn"} onClick={showData}>
        data확인
      </button>
    </div>
  );
};

export default CreatePlan;

import React from "react";
import { useState } from "react";
import Map from "../components/map/Map.jsx";
import PlanBox from "../components/plan/PlanBox.jsx";

const CreatePlan = () => {
  const [apiReady, setApiReady] = useState(false);
  const [mapData, setMapData] = useState("");
  const [mapApiData, setMapApiData] = useState("");
  const [places, setPlaces] = useState([]);
  const [activatedLocation, setActivatedLocation] = useState("");
  const [countDate, setCountDate] = useState([]);
  const [dayCurrentIndex, setDayCurrentIndex] = useState(0);
  const [dayPlaceSchedule, setDayPlaceSchedule] = useState({});

  const [planInfo, setPlanInfo] = useState({
    startPlan: "",
    endPlan: "",
    countDate: "",
    dayPlaceSchedule: "",
  });

  // 검색기능(지도 마커 표시)
  const addPlace = (places) => {
    if (places) {
      setPlaces(places);
    }
  };

  return (
    <div className="w-full h-75vh flex">
      {apiReady ? (
        <PlanBox
          mapData={mapData}
          mapApiData={mapApiData}
          addPlace={addPlace}
          places={places}
          activatedLocation={activatedLocation}
          setActivatedLocation={setActivatedLocation}
          dayCurrentIndex={dayCurrentIndex}
          setDayCurrentIndex={setDayCurrentIndex}
          countDate={countDate}
          setCountDate={setCountDate}
          dayPlaceSchedule={dayPlaceSchedule}
          setDayPlaceSchedule={setDayPlaceSchedule}
          planInfo={planInfo}
          setPlanInfo={setPlanInfo}
        />
      ) : (
        ""
      )}
      <Map
        setApiReady={setApiReady}
        setMapData={setMapData}
        setMapApiData={setMapApiData}
        places={places}
        activatedLocation={activatedLocation}
        setActivatedLocation={setActivatedLocation}
      />
    </div>
  );
};

export default CreatePlan;

import React from "react";
import { useState, useMemo } from "react";
import Map from "../components/map/Map";
import PlanRoute from "../components/plan/PlanRoute";
import SearchMap from "../components/plan/SearchMap";

const CreatePlan = () => {
  const [apiReady, setApiReady] = useState(false);
  const [mapData, setMapData] = useState("");
  const [mapApiData, setMapApiData] = useState("");
  const [places, setPlaces] = useState([]);
  const [activatedLocation, setActivatedLocation] = useState("");
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

  console.log("CreatePlan");

  return (
    <div className="w-full h-75vh flex">
      {apiReady ? (
        <div className="w-1/2 flex">
          <PlanRoute
            dayCurrentIndex={dayCurrentIndex}
            setDayCurrentIndex={setDayCurrentIndex}
            dayPlaceSchedule={dayPlaceSchedule}
            setDayPlaceSchedule={setDayPlaceSchedule}
            planInfo={planInfo}
          />
          <SearchMap
            mapData={mapData}
            mapApiData={mapApiData}
            places={places}
            setPlaces={setPlaces}
            activatedLocation={activatedLocation}
            setActivatedLocation={setActivatedLocation}
            dayCurrentIndex={dayCurrentIndex}
            dayPlaceSchedule={dayPlaceSchedule}
            setDayPlaceSchedule={setDayPlaceSchedule}
            planInfo={planInfo}
          />
        </div>
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

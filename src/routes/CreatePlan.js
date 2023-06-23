import React from "react";
import { useState } from "react";
import Map from "../components/map/Map";
import PlanRoute from "../components/plan/PlanRoute";
import SearchMap from "../components/plan/SearchMap";

const CreatePlan = () => {
  const [apiReady, setApiReady] = useState(false);
  const [mapData, setMapData] = useState("");
  const [mapApiData, setMapApiData] = useState("");
  const [places, setPlaces] = useState([]);
  const [activatedLocation, setActivatedLocation] = useState("");
  const [dayPlaceSchedule, setDayPlaceSchedule] = useState({});

  const [planInfo, setPlanInfo] = useState({
    startPlan: "",
    endPlan: "",
    countDate: "",
    dayPlaceSchedule: "",
  });

  return (
    <div className="w-full h-75vh flex">
      {apiReady ? (
        <div className="w-1/2 flex">
          <PlanRoute
            planInfo={planInfo}
            setPlanInfo={setPlanInfo}
            dayPlaceSchedule={dayPlaceSchedule}
            setDayPlaceSchedule={setDayPlaceSchedule}
          />
          <SearchMap
            mapData={mapData}
            mapApiData={mapApiData}
            places={places}
            setPlaces={setPlaces}
            activatedLocation={activatedLocation}
            setActivatedLocation={setActivatedLocation}
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

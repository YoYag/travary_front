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

  const showData = () => {
    console.log("apiReady = ", apiReady);
    console.log("mapData = ", mapData);
    console.log("mapApiData = ", mapApiData);
  };

  // 검색기능(지도 마커 표시)
  const addPlace = (places) => {
    if (places) {
      setPlaces(places);
    }
  };

  return (
    <div className="w-full h-75vh flex">
      {apiReady ? (
        <div className="w-1/2 flex">
          <PlanRoute />
          <SearchMap
            mapData={mapData}
            mapApiData={mapApiData}
            places={places}
            addPlace={addPlace}
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
      <button className={"btn"} onClick={showData}>
        data확인
      </button>
    </div>
  );
};

export default CreatePlan;

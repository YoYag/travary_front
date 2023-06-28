import React from "react";
import { useState } from "react";
import SearchBar from "./SearchBar";

const SearchMap = ({
  mapData,
  mapApiData,
  places,
  setPlaces,
  activatedLocation,
  setActivatedLocation,
  dayCurrentIndex,
  dayPlaceSchedule,
  setDayPlaceSchedule,
  planInfo,
}) => {
  const [selectPlace, setSelectPlace] = useState("");

  const addPlace = () => {
    let newArr = [...dayPlaceSchedule];
    newArr[dayCurrentIndex].push(selectPlace);
    setDayPlaceSchedule(newArr);
    planInfo.dayPlaceSchedule = JSON.stringify(dayPlaceSchedule);
  };

  const showList = places.map((place, i) => (
    <li
      className={
        activatedLocation === place.place_id ? "border-l-4 border-current" : ""
      }
      key={place.place_id}
      onClick={() => {
        setActivatedLocation(place.place_id);
        setSelectPlace(place.name);
      }}
    >
      <button className="py-2 rounded-none block text-left h-full">
        <p className="text-base pointer-events-none">{place.name}</p>
        <p className="text-xs mt-1 pointer-events-none">
          주소 : {place.formatted_address}
        </p>
        <p className="text-xs mt-1 pointer-events-none">⭐ {place.rating}</p>
      </button>
    </li>
  ));

  return (
    <div className="w-full relative">
      <SearchBar
        mapData={mapData}
        mapApiData={mapApiData}
        setPlaces={setPlaces}
      />
      <ul className="menu p-0 block h-list-custom overflow-y-auto scrollbar">
        {places && showList}
      </ul>
      <button
        className="btn btn-outline btn-neutral btn-sm w-full absolute bottom-0"
        onClick={addPlace}
      >
        일정에 추가
      </button>
    </div>
  );
};

export default SearchMap;

import React from "react";
import { useState } from "react";
import SearchBar from "./SearchBar";

const SearchMap = ({
  mapData,
  mapApiData,
  places,
  addPlace,
  activatedLocation,
  setActivatedLocation,
}) => {
  const [selectPlace, setSelectPlace] = useState("");

  const showData = () => {
    console.log(selectPlace);
  };

  const showList = places.map((place, i) => (
    <li
      className="menu"
      key={place.place_id}
      onClick={() => {
        setActivatedLocation(place.place_id);
        setSelectPlace(place.name);
      }}
    >
      <button
        className={
          activatedLocation === place.place_id
            ? "active block text-left h-full"
            : "block text-left h-full"
        }
      >
        <p className="pointer-events-none">{place.name}</p>
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
        addPlace={addPlace}
      />
      <ul className="h-list-custom overflow-y-auto scrollbar">
        {places && showList}
      </ul>
      <button
        className="btn btn-sm w-full absolute bottom-0"
        onClick={showData}
      >
        일정에 추가
      </button>
    </div>
  );
};

export default SearchMap;

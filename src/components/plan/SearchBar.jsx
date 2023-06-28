import React from "react";
import { useEffect, useRef } from "react";

const SearchBar = ({ mapData, mapApiData, setPlaces }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    const searchBox = new mapApiData.places.SearchBox(inputRef.current);

    const onPlacesChanged = () => {
      const selected = searchBox.getPlaces();

      // 새로운 LatLngBounds 객체 생성
      let bounds = new mapApiData.LatLngBounds();

      selected.forEach((place) => {
        if (!place.geometry) return;

        if (place.geometry.viewport) {
          // 객체의 좌표 경계와 현재 좌표 경계를 모두 포함하는 새로운 좌표 경계 객체를 반환
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
          // mapData.setZoom(14);
        }
      });

      mapData.fitBounds(bounds);

      // 검색기능(지도 마커 표시)
      setPlaces(selected);
    };

    // searchBox에서 장소 선택 시, 이벤트 발생
    searchBox.addListener("places_changed", onPlacesChanged);

    // searchBox 결과가 map화면에 보여지며 해당 위치로 viewport가 이동
    searchBox.bindTo("bounds", mapData);
  }, [setPlaces, mapApiData, mapData]);

  console.log("SearchBar");

  return (
    <div className="form-control">
      <input
        id="pac-input"
        type="text"
        placeholder="Search…"
        className="input input-bordered input-sm w-full max-w-xs"
        ref={inputRef}
      />
    </div>
  );
};
export default SearchBar;

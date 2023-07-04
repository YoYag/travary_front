import React, { useCallback, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

const Map = ({
  setApiReady,
  mapData,
  setMapData,
  mapApiData,
  setMapApiData,
  places,
  activatedLocation,
  setActivatedLocation,
}) => {
  // 지도 api_key
  const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

  // 기본 지도 세팅값
  const defaultProps = {
    center: {
      lat: 37.487935,
      lng: 126.857758,
    },
    zoom: 10,
  };

  // 검색기능(장소정보 api)
  const handleApiLoaded = (map, maps) => {
    // map과 maps 개체가 로드됐다면, 각각의 state값에 넣어준다.
    if (map && maps) {
      setApiReady(true);
      setMapData(map);
      setMapApiData(maps);
      console.log("Api 로딩 성공");
    } else {
      console.log("Api 로딩 실패");
    }
  };

  const markerClicked = (key) => {
    setActivatedLocation(key);
  };

  const getLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        mapData.setCenter(pos);
      });
    }
  }, [mapData]);

  // 사용자 정의 버튼
  const createLocationControl = useCallback(() => {
    const locationButton = document.createElement("button");
    const insertfas = document.createElement("i");

    // Set CSS for the control.
    locationButton.className = "btn btn-square absolute bottom-1 left-4";
    locationButton.appendChild(insertfas);
    insertfas.className = "fa-solid fa-location-crosshairs text-2xl";
    // Setup the click event listeners: simply set the map to Chicago.
    locationButton.addEventListener("click", () => {
      getLocation();
    });
    return locationButton;
  }, [getLocation]);

  // 맵 내부 버튼 표시
  const initMap = useCallback(() => {
    // Create the DIV to hold the control.
    const centerControlDiv = document.createElement("div");
    // Create the control.
    const centerControl = createLocationControl(mapData);

    // Append the control to the DIV.
    centerControlDiv.appendChild(centerControl);
    mapData.controls[mapApiData.ControlPosition.LEFT_BOTTOM].push(
      centerControlDiv
    );
  }, [createLocationControl, mapApiData, mapData]);

  useEffect(() => {
    if (mapData && mapApiData) {
      initMap();
      console.log("init success");
    } else {
      console.log("init fail");
    }
  }, [initMap, mapData, mapApiData]);

  console.log("map");

  return (
    // Important! Always set the container height explicitly
    <div className="w-full h-full relative">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: API_KEY,
          language: "ko",
          libraries: "places",
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onChildClick={markerClicked}
        // map은 지도 객체, maps에는 api object가 들어있음
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        {places.length !== 0 &&
          places.map((place) => (
            <Marker
              key={place.place_id}
              lat={place.geometry.location.lat()}
              lng={place.geometry.location.lng()}
              activatedLocation={place.place_id === activatedLocation}
            />
          ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;

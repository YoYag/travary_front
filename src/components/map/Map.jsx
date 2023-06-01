import React from "react";
import GoogleMapReact from "google-map-react";

const Map = ({ setApiReady, setMapData, setMapApiData }) => {
  // 지도 api_key
  const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
  const AnyReactComponent = ({ text }) => <div>{text}</div>;

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

  return (
    // Important! Always set the container height explicitly
    <div className="w-full h-full">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: API_KEY,
          language: "ko",
          libraries: "places",
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        // map은 지도 객체, maps에는 api object가 들어있음
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        <AnyReactComponent lat={37.487935} lng={126.857758} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default Map;

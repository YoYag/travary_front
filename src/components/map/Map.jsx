import React from "react";
import GoogleMapReact from "google-map-react";

const Map = () => {
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
      >
        <AnyReactComponent lat={37.487935} lng={126.857758} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default Map;

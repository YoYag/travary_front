import React from "react";

const Marker = ({ activatedLocation }) => {
  return (
    <div className="cursor-pointer">
      {activatedLocation ? (
        <button>
          <i className="fas fa-location-dot text-xl" />
        </button>
      ) : (
        <div>
          <i className="fas fa-circle" />
        </div>
      )}
    </div>
  );
};

export default Marker;

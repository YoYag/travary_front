import React from "react";

const Marker = ({ activatedLocation }) => {
  return (
    <div className="cursor-pointer">
      {activatedLocation ? (
        <button>
          <i className="fa-solid fa-map-pin text-2xl" />
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

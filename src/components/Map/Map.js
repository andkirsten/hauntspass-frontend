import React from "react";
import "./Map.css";

const Map = () => {
  return (
    <div>
      <div className="map__header">
        <h1 className="map__title text-center">Haunts Pass Locations</h1>
      </div>
      <p
        className="map__text text-center py-10 font-bold text-lg
    "
      >
        Haunts Pass Location Map coming soon!
      </p>
      {/* <iframe
        className="mx-auto d-block map__iframe"
        src="https://www.google.com/maps/d/embed?mid=1JaUdsXfnYISzAOofIrfnMDYkTWk2d70&ehbc=2E312F"
        width="640"
        height="480"
        title="Haunts Locations Map"
      ></iframe> */}
    </div>
  );
};

export default Map;

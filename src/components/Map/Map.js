import React from "react";
import "./Map.css";

const Map = () => {
  return (
    <div>
      <h1 className="map__title text-center">Haunts Pass Locations</h1>
      <iframe
        className="mx-auto d-block map__iframe"
        src="https://www.google.com/maps/d/embed?mid=1JaUdsXfnYISzAOofIrfnMDYkTWk2d70&ehbc=2E312F"
        width="640"
        height="480"
        title="Haunts Locations Map"
      ></iframe>
    </div>
  );
};

export default Map;

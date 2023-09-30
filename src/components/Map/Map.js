import React from "react";
import "./Map.css";

const Map = () => {
  return (
    <div className="map bg-accent">
      <div className="map__header">
        <h1 className="map__title text-center">Haunts Pass Locations</h1>
      </div>
      <p className="map__text text-center p-10 text-lg">
        Daybreak home locations are growing through October. Be sure to check
        the map on Halloween.
      </p>
      <div className="map__container">
        <iframe
          className="mx-auto d-block map__iframe"
          src="https://www.google.com/maps/d/embed?mid=1JaUdsXfnYISzAOofIrfnMDYkTWk2d70&ehbc=2E312F"
          width="640"
          height="480"
          title="Haunts Locations Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Map.css";
import orangeHouse from "../../images/businessIconPNG.png";
import ghost from "../../images/ghosticonpng.png";
import house from "../../images/hauntedhouseicon.png";
import skull from "../../images/skull.png";
// import gray from "../../images/gray.png";

const Map = () => {
  const [selectedType, setSelectedType] = useState("Type 1");

  const handleMenuClick = (type) => {
    setSelectedType(type);
  };
  return (
    <div className="map bg-accent">
      <div className="map__header">
        <h1 className="map__title text-center text-primary">
          Daybreak Haunts Map
        </h1>
      </div>
      <div className="map__legend">
        <h2 className="map__subtitle text-center text-primary m-0">
          Map Legend
        </h2>
        <div className="tabs">
          <button
            onClick={() => handleMenuClick("Type 1")}
            className={`tab tab-lifted ${
              selectedType === "Type 1" ? "tab-active" : ""
            }`}
          >
            <img className="h-6" src={orangeHouse} alt="orange house" />
            <div className="h-3 w-3 absolute top-1 right-2 text-primary bg-secondary font-bold rounded-full text-xs flex items-center justify-center">
              HP
            </div>
          </button>

          <button
            onClick={() => handleMenuClick("Type 2")}
            className={`tab tab-lifted ${
              selectedType === "Type 2" ? "tab-active" : ""
            }`}
          >
            <img className="h-6" src={ghost} alt="ghost" />
          </button>

          <button
            onClick={() => handleMenuClick("Type 3")}
            className={`tab tab-lifted ${
              selectedType === "Type 3" ? "tab-active" : ""
            }`}
          >
            <img className="h-6" src={house} alt="grey house" />
            <div className="h-3 w-3 absolute top-1 right-2 text-primary bg-secondary font-bold rounded-full text-xs flex items-center justify-center">
              HP
            </div>
          </button>

          <button
            href="#"
            onClick={() => handleMenuClick("Type 4")}
            className={`tab tab-lifted ${
              selectedType === "Type 4" ? "tab-active" : ""
            }`}
          >
            <img className="h-6" src={skull} alt="skull" />
          </button>
          {/* <button
            href="#"
            onClick={() => handleMenuClick("Type 5")}
            className={`tab tab-lifted ${
              selectedType === "Type 5" ? "tab-active" : ""
            }`}
          >
            <img className="h-6" src={gray} alt="grey marker" />
          </button> */}
        </div>
        <div className="text-center lg:w-3/4">
          {selectedType === "Type 1" && (
            <div className="p-4 bg-white rounded-box w-full">
              <h2 className="font-bold">Haunts Pass Businesses</h2>
              <hr className="my-3 mx-10 h-0.5 border-t-0 bg-primary opacity-100 dark:opacity-50" />
              <p>
                Visit these locations with a Haunts Pass throughout October for
                deals & freebies.
              </p>
              <button className="btn btn-sm bg-secondary mt-3">
                <Link to="/">Learn how to get your pass</Link>
              </button>
            </div>
          )}
          {selectedType === "Type 2" && (
            <div className="p-4 bg-white rounded-box w-full">
              <h2 className="font-bold">Decorated Daybreak Homes</h2>
              <hr className="my-3 mx-10 h-0.5 border-t-0 bg-primary opacity-100 dark:opacity-50" />
              <p>Check out these homes and their fun Halloween decorations.</p>
            </div>
          )}
          {selectedType === "Type 3" && (
            <div className="p-4 bg-white rounded-box w-full">
              <h2 className="font-bold">Haunts Pass Homes</h2>
              <hr className="my-3 mx-10 h-0.5 border-t-0 bg-primary opacity-100 dark:opacity-50" />
              <p>
                Visit these homes on Halloween night to get a special treat or
                prize with your Haunts Pass.
              </p>
              <button className="btn btn-sm bg-secondary mt-3">
                <Link to="/">Learn how to get your pass</Link>
              </button>
            </div>
          )}
          {selectedType === "Type 4" && (
            <div className="p-4 bg-white rounded-box w-full">
              <h2 className="font-bold">
                Daybreak Homes with a special event/decoration on Halloween
              </h2>
              <hr className="my-3 mx-10 h-0.5 border-t-0 bg-primary opacity-100 dark:opacity-50" />
              <p>See each home description for more information.</p>
            </div>
          )}
          {/* {selectedType === "Type 5" && (
            <div className="p-4 bg-white rounded-box w-full">
              <h2 className="font-bold">Last Year's Decorated Homes</h2>
              <hr className="my-3 mx-10 h-0.5 border-t-0 bg-primary opacity-100 dark:opacity-50" />
              <p>
                Homes submitted as decorated homes last year. Please resubmit if
                you'd like to mark the pin as current through the{" "}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc-3MyiEojwrUX87uofJxRxcq5hUV23-q32y-K8_cwAS9vBWQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  Haunts Home Form
                </a>
                .
              </p>
            </div>
          )} */}
        </div>
      </div>

      <div className="map__container overflow-hidden">
        <iframe
          title="Daybreak Haunts Map"
          src="https://www.google.com/maps/d/embed?mid=17aEN8OW1tXYPE9dZ1qvMBTPw7xOfwVM&ehbc=2E312F"
          width="100%"
          height="480"
          style={{ border: 0 }}
        ></iframe>
      </div>
    </div>
  );
};

export default Map;

import React from "react";
import CurrentRewards from "../CurrentRewards/CurrentRewards";
import Homes from "../Homes/Homes";
import "./CurrentOffers.css";

const CurrentOffers = (props) => {
  //eslint-disable-next-line

  const [activeTab, setActiveTab] = React.useState("current__rewards");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="current bg-accent">
      <div className="current__header text-center">
        <h1 className="current__title m-5 pt-4">
          Check out the rewards you can enjoy after making a donation!
        </h1>
        <a
          href="https://www.justgiving.com/page/daybreak-haunts-2023"
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn btn-secondary mb-5 text-lg">
            Donate to the Utah Food Bank Now
          </button>
        </a>
      </div>
      <section className="offers pt-3">
        <div>
          <ul className="tabs">
            <li
              className={
                activeTab === "current__rewards" ? "tab tab-active " : "tab "
              }
              onClick={() => handleTabChange("current__rewards")}
            >
              Business Rewards
            </li>
            <li
              className={
                activeTab === "current__homes" ? "tab tab-active" : "tab "
              }
              onClick={() => handleTabChange("current__homes")}
            >
              Haunts Homes
            </li>
          </ul>
        </div>
        <div className="tab-content">
          {activeTab === "current__rewards" && (
            <CurrentRewards rewards={props.rewards} />
          )}
          {activeTab === "current__homes" && <Homes />}
        </div>
      </section>
    </div>
  );
};

export default CurrentOffers;

import React from "react";

import Rewards from "../Rewards/Rewards";
import Homes from "../Homes/Homes";
import "./Pass.css";
import pass from "../../images/HauntsPassTwist.png";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

const Pass = () => {
  const { currentUser } = useCurrentUser();

  const [activeTab, setActiveTab] = React.useState("rewards");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="pass-page">
      <section className="pass">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure className="pass-container bg-secondary">
            <img src={pass} alt="haunts pass"></img>
          </figure>
          <div className="card-body">
            <h2 className="card-title">{currentUser.name}</h2>
            <p>Number of Passes: 5</p>
            <p>Rewards remaining: 7</p>
          </div>
        </div>
      </section>
      <section className="rewards">
        <div>
          <ul className="tabs">
            <li
              className={
                activeTab === "rewards"
                  ? "tab tab-lg tab-bordered tab-active"
                  : "tab tab-bordered tab-lg "
              }
              onClick={() => handleTabChange("rewards")}
            >
              Business Rewards
            </li>
            <li
              className={
                activeTab === "homes"
                  ? "tab tab-lg tab-bordered tab-active"
                  : "tab tab-bordered tab-lg "
              }
              onClick={() => handleTabChange("homes")}
            >
              Haunts Homes
            </li>
          </ul>
        </div>
        <div className="tab-content">
          {activeTab === "rewards" && <Rewards />}
          {activeTab === "homes" && <Homes />}
        </div>
      </section>
    </div>
  );
};

export default Pass;

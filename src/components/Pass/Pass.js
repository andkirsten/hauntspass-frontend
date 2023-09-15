import React from "react";

import Rewards from "../Rewards/Rewards";
import Homes from "../Homes/Homes";
import "./Pass.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

const Pass = () => {
  //eslint-disable-next-line
  const { currentUser } = useCurrentUser();

  const [activeTab, setActiveTab] = React.useState("rewards");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="pass-page bg-secondary">
      <section className="pass">
        <div className="pass__container">
          <p className="pass__number">5</p>
        </div>
      </section>
      <section className="rewards">
        <div>
          <ul className="tabs">
            <li
              className={activeTab === "rewards" ? "tab tab-active " : "tab "}
              onClick={() => handleTabChange("rewards")}
            >
              Business Rewards
            </li>
            <li
              className={activeTab === "homes" ? "tab tab-active" : "tab "}
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

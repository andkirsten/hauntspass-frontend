import React, { useContext } from "react";

import Rewards from "../Rewards/Rewards";
import Homes from "../Homes/Homes";
import "./Pass.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const Pass = (props) => {
  //eslint-disable-next-line
  const { currentUser } = useContext(CurrentUserContext);

  const [activeTab, setActiveTab] = React.useState("rewards");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="pass-page bg-secondary">
      <section className="pass">
        <div className="pass__container"></div>
      </section>
      <section className="rewards">
        <div>
          <ul className="tabs">
            <li
              className={
                activeTab === "rewards"
                  ? "tab tab-bordered tab-active "
                  : "tab tab-bordered"
              }
              onClick={() => handleTabChange("rewards")}
            >
              Business Rewards
            </li>
            <li
              className={
                activeTab === "homes"
                  ? "tab tab-bordered tab-active"
                  : "tab tab-bordered"
              }
              onClick={() => handleTabChange("homes")}
            >
              Haunts Homes
            </li>
          </ul>
        </div>
        <div className="tab-content">
          {activeTab === "rewards" && (
            <Rewards
              rewards={props.rewards}
              handleRedemption={props.handleRedemption}
              redemptions={props.redemptions}
              setRedemptions={props.setRedemptions}
              loading={props.loading}
              currentRedemption={props.currentRedemption}
              setCurrentRedemption={props.setCurrentRedemption}
            />
          )}
          {activeTab === "homes" && <Homes />}
        </div>
      </section>
    </div>
  );
};

export default Pass;

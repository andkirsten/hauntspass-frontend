import React from "react";
import Rewards from "../Rewards/Rewards";
import "./Pass.css";

const Pass = () => {
  return (
    <>
      <section className="pass">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure className="pass-container">
            <p className="pass-title">Haunts Pass</p>
            <p className="pass-house-img">G</p>
          </figure>
          <div className="card-body bg-secondary">
            <h2 className="card-title">Dave Matthews</h2>
            <p>Number of Passes: 5</p>
            <p>Rewards remaining: 7</p>
          </div>
        </div>
      </section>
      <Rewards />
    </>
  );
};

export default Pass;

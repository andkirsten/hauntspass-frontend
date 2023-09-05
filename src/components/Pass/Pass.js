import React from "react";
import "./Pass.css";

const Pass = () => {
  return (
    <>
      <section className="pass">
        <div className="card shadow-xl bg-base-200">
          <div className="card-body">
            <h2 className="card-title">Matt's Pass</h2>
            <p className="card-subtitle">Pass good for 5 people</p>
            <p className="card-subtitle">Expires: 10/31/2021</p>
            <p className="card-subtitle">Perks Redeemed: 2</p>
            <p className="card-subtitle">Perks Remaining: 1</p>
            <p className="card-subtitle">Perks Available: 3</p>
          </div>
        </div>
      </section>
      <section className="perks">
        <h2 className="perks-heading">Perks</h2>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" checked="checked" />
          <div className="collapse-title text-xl font-medium">
            Marvel House : Art Print and Sticker
          </div>
          <div className="collapse-content">
            <p>Location: 304 4th street</p>
            <p>Perk: Art Print of Spiderman and a sticker sheet</p>
            <p>Limitations: One per person</p>
            <button className="btn btn-primary">Redeem</button>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-secondary">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Cupbap: Free Mandu
          </div>
          <div className="collapse-content">
            <p>Location: Towns Center Shopping, east side</p>
            <p>Perk: Free Mandu</p>
            <p>Limitations: One per person</p>
            <button className="btn btn-primary">Redeem</button>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Monster Mini Golf: Free Game
          </div>
          <div className="collapse-content">
            <p>Location: 5432 W. 4532 S.</p>
            <p>Perk: Free Game</p>
            <p>Limitations: One per person</p>
            <button className="btn btn-primary">Redeem</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pass;

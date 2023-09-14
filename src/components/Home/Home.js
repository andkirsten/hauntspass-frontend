import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import step1 from "../../images/step1.png";
import step2 from "../../images/step2.png";
import step3 from "../../images/step3.png";
import header from "../../images/hauntspass Header2.jpg";

const Home = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <img className="hero-image" src={header} alt="haunts pass" />
            <p className="py-6">
              Daybreak Haunts is a volunteer group that creates yearly map that
              includes Daybreak homes and businesses offering something extra
              for those who donate to Food Bank fundraiser.
            </p>
            <button className="btn btn-primary">
              Donate Now to get your Haunts Pass
            </button>
          </div>
        </div>
      </div>
      <section className="info">
        <h2 className="info__title title text-white">How it works</h2>
        <div className="cards">
          <div className="card w-96 glass">
            <figure>
              <img className="card-photo" src={step1} alt="kids" />
            </figure>
            <div className="card-body text-white">
              <h2 className="card-title">MAKE DONATION</h2>
              <p>Make a donation of $20 per person to the Utah Food Bank.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-secondary">Donate now</button>
              </div>
            </div>
          </div>
          <div className="card w-96 glass">
            <figure>
              <img className="card-photo" src={step2} alt="kids" />
            </figure>
            <div className="card-body text-white">
              <h2 className="card-title">GET A PASS</h2>
              <p>
                Submit your donation receipt for a Haunts Pass here on the
                website.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-secondary">
                  Get a Haunts Pass now
                </button>
              </div>
            </div>
          </div>
          <div className="card w-96 glass">
            <figure>
              <img className="card-photo" src={step3} alt="kids" />
            </figure>
            <div className="card-body text-white">
              <h2 className="card-title">GET REWARDS</h2>
              <p>
                Redeem your Haunts Pass at participating homes and businesses
                for special perks and rewards.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-secondary">
                  See Map of Locations
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="participate bg-default">
        <h2 className="participate__title title">Get Involved</h2>
        <div className="flex flex-col w-full lg:flex-row">
          <Link
            to="/volunteer"
            className="option grid flex-grow h-20 card bg-secondary rounded-box place-items-center"
          >
            Become a Haunts Pass Home
          </Link>
        </div>
      </section>
      <section className="sponsors">
        <h2 className="sponsors__title title">Our Sponsors</h2>
        <div className="sponsors__container">
          <div className="sponsors__card">
            <img
              className="sponsors__image"
              src="/images/harmons.png"
              alt="daybreak logo"
            />
          </div>
          <div className="sponsors__card">
            <img
              className="sponsors__image"
              src="/images/1 3.07.19 PM.png"
              alt="daybreak logo"
            />
          </div>
          <div className="sponsors__card">
            <img
              className="sponsors__image"
              src="/images/cupbap.png"
              alt="daybreak logo"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

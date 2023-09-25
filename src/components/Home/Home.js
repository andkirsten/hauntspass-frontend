import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import step1 from "../../images/step1.png";
import step2 from "../../images/step2.png";
import step3 from "../../images/step3.png";
import header from "../../images/hauntspass Header2.png";
import foodbank from "../../images/utah_food_bank_logo.png";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const Home = () => {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <img className="hero-image" src={header} alt="haunts pass" />

            <a href="https://www.justgiving.com/page/daybreak-haunts-2023">
              <button className="btn btn-primary">
                Donate Now to get your Haunts Pass
              </button>
            </a>
          </div>
        </div>
      </section>
      <section className="info">
        <h2 className="info__title title text-white">How it works</h2>
        <div className="cards">
          <div className="card w-96 glass">
            <figure>
              <img className="card-photo" src={step1} alt="kids" />
            </figure>
            <div className="card-body text-white">
              <h2 className="card-title">MAKE DONATION</h2>
              <img src={foodbank} alt="utah food bank" />
              <p>Make a donation of $20 or more through our fundraiser.</p>

              <div className="card-actions justify-end">
                <a href="https://www.justgiving.com/page/daybreak-haunts-2023">
                  <button className="btn btn-secondary">Donate now</button>
                </a>
              </div>
            </div>
          </div>
          <div className="card w-96 glass">
            <figure>
              <img className="card-photo" src={step2} alt="kids" />
            </figure>
            <div className="card-body text-white">
              <h2 className="card-title">GET PASS</h2>
              <p>
                Sign up for an account then submit your donation receipt for a
                Haunts Pass here on the website.
              </p>
              <div className="card-actions justify-end">
                {currentUser ? (
                  <Link to="/pass">
                    <button className="btn btn-secondary">
                      Get a Haunts Pass now
                    </button>
                  </Link>
                ) : (
                  <Link to="/signup">
                    <button className="btn btn-secondary">Sign Up now</button>
                  </Link>
                )}
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
                for special perks and rewards. See terms and conditions.
              </p>
              <div className="card-actions justify-end">
                <Link to="/current-rewards">
                  <button className="btn btn-secondary">SEE REWARDS NOW</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="get-involved bg-accent text-center">
        <h2 className="title">Get Involved</h2>

        <Link
          to="/volunteer"
          className="btn btn-primary btn-lg text-white mt-5 mb-5 mr-5 ml-5"
        >
          Become a Haunts Pass Home
        </Link>
      </section>
      <section className="sponsors">
        <h2 className="sponsors__title title">Our Sponsors</h2>
        <div className="sponsors__container">
          <div className="sponsors__card">
            <a href="https://alloypersonaltraining.com/">
              <img
                className="sponsors__image"
                src="/images/alloy_logo.png"
                alt="alloy personal training"
              />
            </a>
          </div>
          <div className="sponsors__card">
            <a href="https://www.mathnasium.com/southjordan/about">
              <img
                className="sponsors__image"
                src="/images/mathnasium_logo.jpg"
                alt="mathnasium logo"
              />
            </a>
          </div>
          <div className="sponsors__card">
            <a href="https://www.mountainmikespizza.com/locations/south-jordan-w-10400-s/">
              <img
                className="sponsors__image"
                src="/images/mountain_mikes_logo.jpeg"
                alt="mountain mikes pizza"
              />
            </a>
          </div>
          <div className="sponsors__card">
            <a href="https://www.cupbop.com/">
              <img
                className="sponsors__image"
                src="/images/cupbop.png"
                alt="cupbop korean bbq in a cup"
              />
            </a>
          </div>
          <div className="sponsors__card">
            <a href="https://mywarrens.com/">
              <img
                className="sponsors__image"
                src="/images/warrens.png"
                alt="warrens"
              />
            </a>
          </div>

          <div className="sponsors__card">
            <a href="https://www.google.com/maps/place/Sweet+and+Cool/@40.5468679,-112.0053056,17z/data=!3m1!4b1!4m6!3m5!1s0x875285cb41b19bdd:0xb41c307d94b60a15!8m2!3d40.5468679!4d-112.0027307!16s%2Fg%2F11t_jdvqhg?entry=ttu">
              <img
                className="sponsors__image"
                src="/images/sweetAndCool.jpg"
                alt="sweet and cool"
              />
            </a>
          </div>
          <div className="sponsors__card">
            <a href="https://luciennesalon.com/">
              <img
                className="sponsors__image"
                src="/images/lucienne.jpeg"
                alt="lucienne"
              />
            </a>
          </div>
          <div className="sponsors__card">
            <a href="https://www.costavida.com/locations/south-jordan">
              <img
                className="sponsors__image"
                src="/images/costavida.jpeg"
                alt="costa vida"
              />
            </a>
          </div>
          <div className="sponsors__card">
            <a href="https://www.google.com/maps/place/Sweet+Churros/@40.5408545,-111.9809232,17z/data=!4m6!3m5!1s0x87528507886301cb:0xd32e1d797fec8006!8m2!3d40.5408545!4d-111.9809232!16s%2Fg%2F11qywcxw41?entry=ttu">
              <img
                className="sponsors__image"
                src="/images/sweet-churros.png"
                alt="sweet churros"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

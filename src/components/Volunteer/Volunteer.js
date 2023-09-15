import React from "react";
import "./Volunteer.css";
import { Link } from "react-router-dom";

const HauntsHouse = () => {
  return (
    <div>
      <div className="volunteer__header max-w-screen-md mx-auto">
        <h1 className="volunteer__title text-3xl">
          Support the Utah Food Bank by being a Haunts Pass Home!
        </h1>
      </div>
      <p className="volunteer__callout bg-secondary">
        The more homes we have, the more people will want to donate and
        participate.
      </p>
      <div className="volunteer__content max-w-screen-md mx-auto">
        <h2 className="volunteer__heading">Instructions/Process:</h2>
        <ol className="p-6 list-decimal">
          <li>
            After you fill out the form, we will mark you as a Haunts Pass
            Location on the Daybreak Haunts map and add you to the website.
          </li>
          <li>
            On Halloween, post the sign we give you near your door or walkway.
          </li>
          <li>
            Give a bonus treat or reward to those who show you their pass on the
            website.
          </li>
        </ol>
        <p className="p-6">
          Check out the{" "}
          <Link className="link" to="/faqs">
            FAQs page
          </Link>{" "}
          for more details.
        </p>
        <button className="btn btn-primary">Sign Up Now</button>
      </div>
    </div>
  );
};

export default HauntsHouse;

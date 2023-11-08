import React from 'react';
import './Volunteer.css';
import { Link } from 'react-router-dom';

function HauntsHouse() {
  return (
    <div className="volunteer bg-accent">
      <div className="volunteer__header mx-auto">
        <h1 className="volunteer__title text-3xl">
          Support the Utah Food Bank by being a Haunts Pass Home!
        </h1>
      </div>
      <p className="volunteer__callout">
        The more homes we have, the more people will want to donate and
        participate.
      </p>
      <div className="volunteer__content max-w-screen-md mx-auto">
        <h2 className="volunteer__heading">Instructions/Process:</h2>
        <ol className="p-6 list-decimal">
          <li>
            After you fill out the form below, we will mark you as a Haunts Pass
            Location on the Daybreak Haunts map and add you to the website.
          </li>
          <li>
            Before Halloween, we will provide you a sign that may be posted near
            your door or walkway.
          </li>
          <li>
            Give a bonus treat or reward to those who show you their pass on the
            website.
          </li>
          <li>
            Please see the
            {' '}
            <Link to="/faqs" className="link">
              "Participating Homes" section of the FAQ page
            </Link>
            {' '}
            for additional information.
          </li>
        </ol>
        <p>
          Reach out to us on the
          {' '}
          <a href="https://www.facebook.com/daybreakhaunts">
            Daybreak Haunts Facebook page
          </a>
          {' '}
          with any additional questions.
        </p>

        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSf4Dcu0I89-h2FI2s0vl0PPrpmQFXrft2lPg25nmTz_t0XFhw/viewform?embedded=true"
          width="100%"
          height="800"
          title="volunteer-form"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}

export default HauntsHouse;

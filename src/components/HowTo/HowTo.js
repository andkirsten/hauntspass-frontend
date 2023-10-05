import React from "react";
import "./HowTo.css";
import { Link } from "react-router-dom";
import donation from "../../images/donationamount.png";
import email from "../../images/emailaddress.png";
import signup from "../../images/signup.png";
import receipt from "../../images/receiptreferenceInput.png";
import anytime from "../../images/mountainmikesAnytime.png";
import ticket from "../../images/hauntspassticket.png";
import warrens from "../../images/warrensConfirmation.png";

const HowTo = () => {
  return (
    <div className="how-to min-h-screen text-center bg-base-200">
      <h1 className="how-to__title w-full py-4 bg-accent mb-7">
        How to Get a Haunts Pass
      </h1>
      <p className="mb-4 mx-4 text-xl max-w-lg">
        Watch this video for an overview of the process, and check out the
        step-by-step instructions below.
      </p>

      <div className="mb-6">
        <iframe
          width="315"
          height="560"
          src="https://www.youtube.com/embed/ERXBZ8a6usw"
          title="Haunts Pass Overview"
          allowFullScreen
        ></iframe>
      </div>
      <div className="max-w-xl bg-white p-10 rounded-xl">
        <h2 className="how-to__subtitle text-2xl font-semibold mb-5 bg-secondary text-primary p-4 w-full border-b-8 border-black border-double rounded-xl">
          STEP 1: Donate
        </h2>

        <p className="mb-4 mx-4">
          The most important part of this process is the donation. It is the
          whole reason we are doing this! The Utah Food Bank uses Justgiving.com
          to accept monetary donations. We have set up a fundraiser through
          JustGiving.com to collect the funds that will go directly to the Utah
          Food Bank. To get a Haunts Pass you must donate $25 or more through
          that fundraiser. We will check the amount and the validity of the
          donation. While filling out the information, don’t forget to put in
          your email address for a receipt. This is done after you put in your
          payment details.
        </p>
        <div className="how-to__img-container">
          <div className="mb-4">
            <img
              src={donation}
              alt="Donation Amount"
              className="border-2 border-black shadow-lg rounded-md "
            />
          </div>
          <div className="mb-4">
            <img
              src={email}
              alt="Email Address"
              className="border-2 border-black shadow-lg rounded-md"
            />
          </div>
        </div>
        <h2 className="how-to__subtitle text-2xl font-semibold mt-10 mb-4 bg-secondary text-primary p-4 w-full border-b-8 border-black border-double rounded-xl">
          STEP 2: Get Your Pass
        </h2>

        <p className="mb-4 mx-4">
          Once you have donated come back to our website, DaybreakHaunts.org,
          and click “Sign Up” on the top right bar. Enter your information to
          create a free account. Once your account is created you will be asked
          for the “Receipt Reference” number found on the confirmation email
          sent to you from JustGiving.com. Type it in, submit, and you have your
          Haunts Pass!
        </p>

        <div className="how-to__img-container">
          <div className="mb-4">
            <img
              src={signup}
              alt="signup screenshot"
              className="border-2 border-black shadow-lg rounded-md"
            />
          </div>
          <div className="mb-4">
            <img
              src={receipt}
              alt="Receipt Reference"
              className="border-2 border-black shadow-lg rounded-md"
            />
          </div>
        </div>

        <h2 className="how-to__subtitle text-2xl font-semibold mb-4 mt-10 bg-secondary text-primary p-4 w-full border-b-8 border-black border-double rounded-xl">
          STEP 3: Get Rewards
        </h2>

        <p className="mb-4 mx-4">
          Now that you have your pass you can visit participating businesses in
          October and November to redeem them. Click “My Pass” on the top right
          of the website when you are logged in. Choose which offer you want to
          redeem and click “REDEEM NOW” when you are ready to receive the deal.
          Most businesses will require you to be present for redemption. Click
          “YES, REDEEM NOW” while at the counter and show the confirmation
          screen to the employee.
        </p>
        <div className="mb-4">
          <img
            src={warrens}
            alt="Confirmation Screen"
            className="border-2 border-black shadow-lg rounded-md w-1/2 justify-center mx-auto"
          />
        </div>
        <p className="mb-4 mx-4">
          Some businesses have offers available for multiple visits in October.
          For these you just need to show the Haunts Pass ticket at the top of
          the “My Pass” page to get the deal.
        </p>
        <div className="how-to__img-container">
          <div className="mb-4">
            <img
              src={ticket}
              alt="haunts pass ticket"
              className="border-2 border-black shadow-lg rounded-md"
            />
          </div>
          <div className="mb-4">
            <img
              src={anytime}
              alt="Mountain Mike's Anytime reward"
              className="border-2 border-black shadow-lg rounded-md"
            />
          </div>
        </div>
        <p className="mb-4 mx-4">
          For Halloween Night we have a number of Daybreak Homes signed up to
          provide a special treat or reward just for Haunts Pass holders and
          their household. Check out our map for locations or the list of homes
          on the “My Pass” page for details on what they offer. When you visit,
          show them your Haunts Pass Ticket from the website and they will give
          your trick-or-treaters their special treat or reward.
        </p>
      </div>
      <div className="my-15 w-full bg-accent py-5">
        <p className="mx-5 text-2xl">
          Check out our{" "}
          <Link to="/faqs" className="link">
            Frequently Asked Questions
          </Link>{" "}
          for more information.
        </p>
        <p className="mt-7 mx-5 text-2xl"> Have a Happy Halloween!</p>
      </div>
    </div>
  );
};

export default HowTo;

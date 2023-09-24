import React from "react";
import { Link } from "react-router-dom";
import "./FAQs.css";

const FAQ = () => {
  return (
    <section className="faq">
      <div className="faq-header place-items-center">
        <h1 className="faq-title text-5xl font-bold">
          Frequently Asked Questions
        </h1>
      </div>

      <div className="p-6 space-y-6">
        <h2 className="faq-subheading text-2xl font-semibold">Passholders</h2>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">How do I get my pass?</h3>
          <p>
            <span className="font-bold">Answer:</span> Donate to the{" "}
            <a
              href="https://www.justgiving.com/page/daybreak-haunts-2023"
              className="link"
            >
              Utah Food Bank
            </a>{" "}
            a minimum of $20 per household. Please be generous and donate as
            much as you would like. A receipt will be emailed to you. Then go to
            the Daybreak Haunts website and follow the instructions to register
            your pass. You will need to provide the Receipt Reference number
            found on the receipt.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">How do I redeem a reward?</h3>
          <p>
            <span className="font-bold">Answer:</span> Log into your pass, and
            choose a business. By clicking on the business name, the offer
            details will appear with a “Redeem Now” button. Click the redeem
            button while present at the business and display your pass to the
            employee. Many businesses also offer month-long deals where no
            redemption is required. Simply show your pass and receive the deal.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            I have two kids, do I have to get two separate passes?
          </h3>
          <p>
            <span className="font-bold">Answer:</span> No. We ask that you
            donate as much as you can to support the{" "}
            <a
              href="https://www.justgiving.com/page/daybreak-haunts-2023"
              className="link"
            >
              Food Bank
            </a>{" "}
            with a minimum of $20 per household. The business deals are designed
            to accommodate multiple family members. On Halloween night, while
            trick-or-treating, show your Haunts Pass to the participating home,
            which is good for all present family members that want to receive a
            reward.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            What do I get if I have a Haunts Pass?
          </h3>
          <p>
            <span className="font-bold">Answer:</span> In addition to a warm
            feeling in your heart, check out our{" "}
            <Link to="/current-rewards" className="link">
              current offerings
            </Link>{" "}
            and the terms and conditions.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            How do I find a Haunts Pass location?
          </h3>
          <p>
            <span className="font-bold">Answer:</span> Look at the{" "}
            <Link to="/map" className="link">
              Daybreak Haunts map
            </Link>{" "}
            to find the locations displaying the Daybreak Haunts haunted house
            logo, or check out our{" "}
            <Link to="/current-rewards" className="link">
              current offerings
            </Link>{" "}
            listing the locations.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            When can I use the Haunts Pass?
          </h3>
          <p>
            <span className="font-bold">Answer:</span> Participating businesses
            generally have their rewards available for the month of October.
            Participating homes may be visited Halloween night during your
            typical trick-or-treating hours. Check the{" "}
            <Link to="/current-rewards" className="link">
              current offerings
            </Link>{" "}
            page for locations, rewards, and terms & conditions.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            Why donate money and not cans? Can I donate a can?
          </h3>
          <p>
            <span className="font-bold">Answer:</span> Well, sure, you can
            donate a can, but remember, cans are notorious introverts at
            parties. They sit quietly on the shelf, while money? Money's the
            life of the pantry! For every $1 donated, the Food Bank can throw a
            pantry bash worth $9.04 in goods and services. So, unless your can's
            planning to breakdance, we'd suggest sticking to cash. Party on,
            donors! Visit{" "}
            <a
              href="https://www.justgiving.com/page/daybreak-haunts-2023"
              className="link"
            >
              our donation page at Justgiving.org
            </a>
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            How much of my donation goes to the Utah Food Bank?
          </h3>
          <p>
            <span className="font-bold">Answer:</span> The Utah Food Bank uses
            Justgiving.com to collect donations and receives 97% of the funds.
            Daybreak Haunts <strong>does not</strong> collect any portion of the
            donations.
          </p>
        </div>

        <h2 className="faq-subheading text-2xl font-semibold">
          Participating Homes
        </h2>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            What is a participating home?
          </h3>
          <p>
            <span className="font-bold">Answer:</span> These are Daybreak
            resident homes that would like to support the fundraiser. The only
            difference is the home provides a special bonus treat to those that
            show their Daybreak Haunts Pass.{" "}
            <Link to="/volunteer" className="link">
              Volunteer to be a participating home.
            </Link>
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            What type of “bonus treat” should I provide?
          </h3>
          <p>
            <span className="font-bold">Answer:</span> Your bonus treat can be
            as big or small as you want. Just tell us what works best for you,
            and weU+2019ll share the details on the map and current offering
            page. Examples weU+2019ve heard so far include “full-size candy
            bars,” “Double the candy,” “Photo opportunity with characters,”
            “custom experience” e.g., fast pass to haunted house, “bag of
            popcorn,” “can of soda,” “a small gift bag,” or a themed toy U+002d
            e.g., “Harry Potter wand.”
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            What if I run out of “bonus treats”?
          </h3>
          <p>
            <span className="font-bold">Answer:</span> Many homes are listing
            “while supplies last” on their map description. Other ideas include,
            “First (insert number here) passholders receive …,” etc. When your
            supplies run out, simply take down the sign near your door knowing
            that the fundraiser was successful with many trick-or-treaters
            donating to the Utah Food Bank.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            How can I know the number of bonus treats to have ready so I can be
            prepared?
          </h3>
          <p>
            <span className="font-bold">Answer:</span> We can provide an
            estimation on the number of current passholders before Halloween.
            However, among other variables, many pass holders will not visit
            every home. Last year, homes nearby large attractions received more
            visitors. So it may be difficult to predict. See FAQ question #3 for
            ideas on how to handle this.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            When is the Daybreak Haunts Pass valid?
          </h3>
          <p>
            <span className="font-bold">Answer:</span> Businesses rewards are
            available for the month of October and some into November.
            Residential homes will give out bonus treats during typical
            trick-or-treating hours on Halloween.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            What if the trick-or-treater claims they have a pass but canU+2019t
            display it?
          </h3>
          <p>
            <span className="font-bold">Answer:</span> Just make sure the
            costume is cute if youU+2019re going to allow it. But know that
            Daybreak Haunts will sorely curse any trick-or-treater that is
            telling a fib.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            Do I have to have crazy decorations at my home to participate?
          </h3>
          <p>
            <span className="font-bold">Answer:</span> No, your house is perfect
            the way it is.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

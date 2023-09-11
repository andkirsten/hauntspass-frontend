import React from "react";
import "./FAQs.css";

const FAQ = () => {
  return (
    <section className="faq">
      <div className="faq-header hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="faq-title text-5xl font-bold">
              Frequently Asked Questions
            </h1>
          </div>
        </div>
      </div>
      <div className="p-6 space-y-6">
        <h2 className="faq-subheading text-2xl font-semibold">Passholders</h2>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">How do I get my pass?</h3>
          <p>
            <span className="text-primary">Answer:</span> Donate to the Utah
            Food Bank a minimum of $5 per person. Please be generous and donate
            as much as you would like. A receipt will be emailed to you - the
            emailed receipt is your Haunts Pass. Print it for the Harmons treat,
            or save to your phone for the rest.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            I have two kids, do I have to get two separate passes?
          </h3>
          <p>
            <span className="text-primary">Answer:</span> No. We ask that you
            donate at least $5 per person and the total amount will be reflected
            on the receipt. For example, if you donate $10, the single donation
            receipt will be valid for 2 people (you'll just need to communicate
            the number of passes/trick-or-treaters at participating locations).
            However, this is a fundraiser so please donate as much as you'd like
            to the Food Bank.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            What do I get if I have a Haunts Pass?
          </h3>
          <p>
            <span className="text-primary">Answer:</span> In addition to a warm
            feeling in your heart, check out our current offerings. All pass
            holders must be present at the participating location to receive the
            bonus treat.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            How do I find a Haunts Pass location?
          </h3>
          <p>
            <span className="text-primary">Answer:</span> Look at the Daybreak
            Haunts map to find the locations displaying the Daybreak Haunts
            haunted house logo, or check out our current offerings listing the
            locations.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            When can I use the Haunts Pass?
          </h3>
          <p>
            <span className="text-primary">Answer:</span> Participating homes
            may be visited Halloween night during your typical trick-or-treating
            hours. Check current offerings for exceptions such as Harmons
            Daybreak.
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
            <span className="text-primary">Answer:</span> These are Daybreak
            resident homes or businesses that would like to participate in a
            fundraiser, by simply giving out candy to pass holders on Halloween.
            The only difference is you are providing a special bonus treat to
            those who show you their Food Bank donation receipt (Daybreak Haunts
            Pass). Volunteer to be a participating home.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            What type of “bonus treat” should I provide?
          </h3>
          <p>
            <span className="text-primary">Answer:</span> Your bonus treat can
            be as big or small as you want. Just tell us what works best for
            you, and we’ll share the details on the map. Examples we’ve heard so
            far include “full-size candy bars,” “Double the candy,” “Photo
            opportunity with characters,” “custom experience” e.g., fast pass to
            haunted house, “bag of popcorn,” “can of soda,” “a small gift bag,”
            or a themed toy – e.g., “Harry Potter wand.”
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            What if I run out of “bonus treats”?
          </h3>
          <p>
            <span className="text-primary">Answer:</span> Many homes are listing
            “while supplies last” on their map description. Other ideas include,
            “First (insert number here) passholders receive …,” etc. When your
            supplies run out, simply take down the sign near your door knowing
            that Daybreak has many generous trick-or-treaters.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            How can I know the number of bonus treats to have ready so I can be
            prepared?
          </h3>
          <p>
            <span className="text-primary">Answer:</span> The Utah Food Bank
            website lists the number of donors and total donation amount, which
            provides a ball park idea of pass holders. However, among other
            variables, many pass holders will not visit every home. So it may be
            difficult to predict. See FAQ question #3 for ideas on how to handle
            this.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            When is the Daybreak Haunts Pass valid?
          </h3>
          <p>
            <span className="text-primary">Answer:</span> Residential homes will
            give out bonus treats during typical trick-or-treating hours on
            Halloween. Harmon’s however, is allowing passholders to visit the
            store Oct 29th-31st. See “Current Offers” for more details.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            What if the trick-or-treater shows me a single donation receipt for
            $10? Does that cover more than one person?
          </h3>
          <p>
            <span className="text-primary">Answer:</span> Yes. We are asking
            people to donate at least $5 per person. However, if one pass holder
            shows a single pass for $10, that would be valid for two people.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            What if the trick-or-treater claims they have a pass but doesn’t
            have a receipt?
          </h3>
          <p>
            <span className="text-primary">Answer:</span> Just make sure the
            costume is cute if you’re going to allow it. But know that Daybreak
            Haunts will sorely curse any trick-or-treater that is telling a fib.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            Do I have to have crazy decorations at my home to participate?
          </h3>
          <p>
            <span className="text-primary">Answer:</span> No, your house is
            perfect the way it is.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

import React, { useState } from "react";
import "./Rewards.css";
import foodBank from "../../images/utah_food_bank_logo.png";
import { Link } from "react-router-dom";

const AccordionItem = (props) => {
  const handleRedeem = (e) => {
    e.preventDefault();
    props.handleRedemption(props.activeReward._id);
  };

  const onClick = () => {
    props.toggleItem(props.index);
    props.setActiveReward(props.item);
  };

  const handleFinishRedemption = (e) => {
    e.preventDefault();
    document.getElementById("redeem-modal").close();
    props.setCurrentRedemption(null);
    props.setActiveReward(null);
    props.setRedemptions([...props.redemptions, props.activeReward._id]);
  };

  const formattedDateAndTime = (date) => {
    const newDate = new Date(date);
    const dateOptions = { year: "numeric", month: "short", day: "numeric" };
    const formattedDate = newDate.toLocaleDateString("en-US", dateOptions);
    const options = { hour: "numeric", minute: "numeric" };
    const formattedTime = newDate.toLocaleTimeString("en-US", options);
    return `${formattedDate} at ${formattedTime}`;
  };

  const checkRedemption = () => {
    if (props.redemptions === undefined) {
      return false;
    }
    if (props.activeReward === undefined) {
      return false;
    }
    if (props.redemptions.includes(props.activeReward?._id)) {
      return true;
    } else {
      return false;
    }
  };

  const handleProblem = (e) => {
    e.preventDefault();
    document.getElementById("problem-modal").close();
  };

  return (
    <div className="collapse mb-3 bg-white">
      <div
        className={`accordion__item ${props.isOpen ? "open" : ""}`}
        onClick={onClick}
      >
        <div
          className={`accordion__title px-4 collapse-title text-white ${
            props.redemptions?.includes(props.item._id)
              ? "bg-slate-500"
              : "bg-primary"
          }`}
        >
          <p>{props.item.rewardTitle}</p>
          <span className="icon__container">
            <img
              src={props.item.imgUrl}
              alt={props.item.rewardTitle}
              className="reward__icon bg-white"
            />
          </span>
        </div>
        {props.isOpen && (
          <div className="collapse-content">
            <div className="collapse-container py-4">
              <div className="collapse-header px-4">
                {props.item.imgUrl && (
                  <div>
                    <img
                      src={props.item.imgUrl}
                      alt="reward"
                      className="reward__image"
                    />
                  </div>
                )}
                {props.item.businessDescription && (
                  <div className="reward__business-description">
                    <p>
                      <strong>{props.item.businessDescription}</strong>
                    </p>
                  </div>
                )}
              </div>
              <div className="reward__info space-y-4 py-4">
                <div>
                  {props.item.rewardExtras && (
                    <div>
                      <p className="">
                        <strong>Anytime Reward: </strong>
                        {props.item.rewardExtras}
                      </p>
                    </div>
                  )}
                </div>
                <p>
                  <strong>One-time Reward:</strong> {props.item.offer}
                </p>
              </div>
              <button
                className={`reward-redeem-btn btn btn-wide ${
                  checkRedemption() ? "btn-disabled" : "btn-secondary"
                } `}
                onClick={() =>
                  document.getElementById("confirm-modal").showModal()
                }
                disabled={checkRedemption()}
              >
                {checkRedemption() ? "Already Redeemed" : "Redeem Now"}
              </button>
              <p className="pt-4">
                <strong>Terms and Conditions:</strong>
              </p>
              <p className="text-center">{props.item.rewardTerms}</p>
            </div>
          </div>
        )}
      </div>
      <dialog id="confirm-modal" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Are You Sure?</h3>
          <p className="py-4">You can only redeem this reward ONCE!</p>
          <p>
            Wait until you are ready to claim your reward at the business before
            you click redeem
          </p>
          <div className="modal-action p-4">
            <form method="dialog">
              <button
                className={`redeem__btn btn mb-5 mr-5 ${
                  props.loading ? "btn-disabled" : "btn-secondary"
                }`}
                onClick={handleRedeem}
                disabled={props.loading}
              >
                {props.loading ? "Loading Reward" : "Yes, Redeem Now"}
              </button>
              <button className="btn">No, Cancel</button>
            </form>
          </div>
        </div>
      </dialog>
      <dialog id="redeem-modal" className="modal">
        <div className="redeem-modal__content modal-box w-11/12 max-w-5xl ">
          <h3 className="redeem-modal__title text-center ">
            Enjoy your reward!
          </h3>
          <p className="text-center text-sm px-5">
            Show this screen to the business associate to claim your reward.
          </p>
          <div className="redeem-modal__reward text-center bg-accent py-5 px-4 my-5 border-double border-8 border-black">
            <p className="mb-1 text-center font-bold">
              {props.activeReward?.rewardTitle}
            </p>
            <hr className="my-3 mx-10 h-0.5 border-t-0 bg-primary opacity-100 dark:opacity-50" />
            <p className="text-center">{props.activeReward?.offer}</p>
          </div>
          <p className="text-center ">Redeemed at</p>
          <p className="text-center">
            {formattedDateAndTime(props.currentRedemption?.redeemedAt)}{" "}
          </p>
          <div className="redeem-modal__thankyou text-center">
            <p className="text-center text-sm pt-5">
              Thank you for supporting the
            </p>
            <img src={foodBank} alt="haunts logo" className="px-8" />
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button
                className="btn bg-secondary"
                onClick={handleFinishRedemption}
              >
                All Finished, check out other rewards.
              </button>
            </form>
          </div>
        </div>
      </dialog>
      <dialog id="problem-modal" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Whoops!</h3>
          <p className="py-4">
            It appears you've already redeemed this reward. Check to see if
            maybe the reward was redeemed on a different device already.
          </p>
          <p>
            If you think this is an error, please send us a message on our{" "}
            <Link to="/contact" className="link">
              Contact Us
            </Link>{" "}
            page.
          </p>
          <div className="modal-action p-4">
            <form method="dialog">
              <button className="btn" onClick={handleProblem}>
                OK
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

const Accordion = (props) => {
  return (
    <div>
      {props.rewards
        .slice()
        // eslint-disable-next-line array-callback-return
        .sort((a, b) => {
          if (props.redemptions && Array.isArray(props.redemptions)) {
            // Check if a or b is in props.redemptions
            const aIsRedeemed = props.redemptions.includes(a._id);
            const bIsRedeemed = props.redemptions.includes(b._id);

            // If both are redeemed or both are not, sort alphabetically
            if (aIsRedeemed === bIsRedeemed) {
              return a.rewardTitle.localeCompare(b.rewardTitle);
            }

            // If only a is redeemed, move it to the bottom
            if (aIsRedeemed) {
              return 1;
            }

            // If only b is redeemed, move it to the bottom
            if (bIsRedeemed) {
              return -1;
            }
          }
        })
        .map((item, index) => (
          <AccordionItem
            handleRedemption={props.handleRedemption}
            key={index}
            item={item}
            isOpen={index === props.openIndex}
            toggleItem={() => props.toggleItem(index)}
            activeReward={props.activeReward}
            setActiveReward={props.setActiveReward}
            redemptions={props.redemptions}
            setRedemptions={props.setRedemptions}
            loading={props.loading}
            currentRedemption={props.currentRedemption}
            setCurrentRedemption={props.setCurrentRedemption}
          />
        ))}
    </div>
  );
};

const Rewards = (props) => {
  const [openIndex, setOpenIndex] = useState(-1); // Initialize with -1 to have no item open by default
  const [activeReward, setActiveReward] = useState(null);

  const toggleItem = (index) => {
    if (openIndex === index) {
      // Clicked on the currently open item, close it
      setOpenIndex(-1);
    } else {
      // Clicked on a different item, open it
      setOpenIndex(index);
    }
  };

  return (
    <section className="rewards">
      <div className="w-full accordion-container pt-5">
        <Accordion
          handleRedemption={props.handleRedemption}
          rewards={props.rewards}
          openIndex={openIndex}
          toggleItem={toggleItem}
          activeReward={activeReward}
          setActiveReward={setActiveReward}
          redemptions={props.redemptions}
          setRedemptions={props.setRedemptions}
          loading={props.loading}
          currentRedemption={props.currentRedemption}
          setCurrentRedemption={props.setCurrentRedemption}
        />
      </div>
      <p className="text-center p-10">
        All businesses reserve the right to make adjustments to offers as needed
        during the fundraiser period.
      </p>
    </section>
  );
};

export default Rewards;

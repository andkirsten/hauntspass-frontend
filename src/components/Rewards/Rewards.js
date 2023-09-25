import React, { useState } from "react";
import "./Rewards.css";
import foodBank from "../../images/utah_food_bank_logo.png";

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

  return (
    <div className="collapse bg-white">
      <div
        className={`accordion__item ${props.isOpen ? "open" : ""}`}
        onClick={onClick}
      >
        <div
          className={`r__title collapse-title flex text-white text-xl font-medium ${
            props.redemptions.includes(props.item._id)
              ? "bg-slate-500"
              : "bg-primary"
          }`}
        >
          <span>{props.item.rewardTitle}</span>
          <span>
            <img
              src={props.item.imgUrl}
              alt={props.item.rewardTitle}
              className="reward-icon"
            />
          </span>
        </div>
        {props.isOpen && (
          <div className="collapse-content">
            <div className="collapse-container">
              <div className="collapse-header">
                {props.item.imgUrl && (
                  <div>
                    <img
                      src={props.item.imgUrl}
                      alt="reward"
                      className="reward-image"
                    />
                  </div>
                )}
                {props.item.businessDescription && (
                  <div className="redeem-business">
                    <p>
                      <strong>{props.item.businessDescription}</strong>
                    </p>
                  </div>
                )}
              </div>
              <div className="redeem-info space-y-4">
                <p>
                  <strong>Reward:</strong> {props.item.offer}
                </p>
                <p>
                  <strong>Terms and Conditions:</strong>{" "}
                  {props.item.rewardTerms}
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
              <div>
                {props.item.rewardExtras && (
                  <div className="reward-extras text-center">
                    <p>
                      <strong>Valid anytime until November 14th:</strong>{" "}
                      {props.item.rewardExtras}
                    </p>
                  </div>
                )}
              </div>
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
                className={`redeem__btn btn mr-5 ${
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
        <div className="redeem-content modal-box w-11/12 max-w-5xl ">
          <h3 className="redeem__modal-title font-bold text-center ">
            Enjoy your reward!
          </h3>
          <p className="text-center">
            Show this screen to the business associate to claim your reward.
          </p>
          <p className="py-4 text-center">
            Your {props.activeReward?.rewardTitle} Reward:
          </p>
          <p className="font-bold text-center ">{props.activeReward?.offer}</p>
          <p className="py-4 text-center">
            Redeemed at{" "}
            {formattedDateAndTime(props.currentRedemption?.redeemedAt)}{" "}
          </p>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn" onClick={handleFinishRedemption}>
                All Finished, check out other rewards.
              </button>
            </form>
          </div>
          <p className="text-center text-sm pt-5">
            Thank you for supporting the
          </p>
          <img src={foodBank} alt="haunts logo" />
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
    <section className="rewards flex justify-center items-center p-4">
      <div className="w-full accordion-container">
        <Accordion
          handleRedemption={props.handleRedemption}
          rewards={props.rewards}
          openIndex={openIndex}
          toggleItem={toggleItem}
          activeReward={activeReward}
          setActiveReward={setActiveReward}
          redemptions={props.redemptions}
          loading={props.loading}
          currentRedemption={props.currentRedemption}
          setCurrentRedemption={props.setCurrentRedemption}
        />
      </div>
    </section>
  );
};

export default Rewards;

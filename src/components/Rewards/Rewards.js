import React, { useState } from "react";
import "./Rewards.css";

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
  };

  const formattedDateAndTime = (date) => {
    const newDate = new Date(date);
    const formattedDate = newDate.toLocaleDateString("en-US");
    const formattedTime = newDate.toLocaleTimeString("en-US");
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
        <div className="collapse-title flex text-white text-xl font-medium bg-primary">
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
          <p className="py-4">
            You can only redeem this reward ONCE! Wait until you are ready to
            claim your reward before you redeem
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button
                className={`btn ${
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
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">
            {props.activeReward?.rewardTitle} Reward!
          </h3>
          <p className="py-4">
            redeemed at: {formattedDateAndTime(props.redemption?.redeemedAt)}{" "}
          </p>
          <p className="py-4">
            You have successfully redeemed your reward of{" "}
            {props.activeReward?.offer}! Please show this screen to the business
            to claim your reward.
          </p>
          <p className="py-4">
            Reward terms: {props.activeReward?.rewardTerms}
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn" onClick={handleFinishRedemption}>
                All Finished, check out other rewards.
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
      {props.rewards.map((item, index) => (
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
        />
      </div>
    </section>
  );
};

export default Rewards;

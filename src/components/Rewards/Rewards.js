import React, { useState } from "react";
import "./Rewards.css";
import { Link } from "react-router-dom";
import foodBank from "../../images/utah_food_bank_logo.png";

// destructure props

function AccordionItem({
  item,
  isOpen,
  toggleItem,
  activeReward,
  setActiveReward,
  handleRedemption,
  redemptions,
  setRedemptions,
  loading,
  currentRedemption,
  setCurrentRedemption,
  index,
}) {
  const handleRedeem = (e) => {
    e.preventDefault();
    handleRedemption(activeReward._id);
  };

  const onClick = () => {
    toggleItem(index);
    setActiveReward(item);
  };

  const handleFinishRedemption = (e) => {
    e.preventDefault();
    document.getElementById("redeem-modal").close();
    setCurrentRedemption(null);
    setActiveReward(null);
    setRedemptions([...redemptions, activeReward._id]);
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
    if (redemptions === undefined) {
      return false;
    }
    if (activeReward === undefined) {
      return false;
    }
    if (redemptions.includes(activeReward?._id)) {
      return true;
    }
    return false;
  };

  const handleProblem = (e) => {
    e.preventDefault();
    document.getElementById("problem-modal").close();
  };

  const checkExpiration = () => {
    const today = new Date();
    const expirationDate = new Date(item.expirationDate);
    if (today > expirationDate) {
      return true;
    }
    return false;
  };

  return (
    <div className="collapse mb-3 bg-white">
      <div
        className={`accordion__item ${isOpen ? "open" : ""}`}
        onClick={onClick}
      >
        <div
          className={`accordion__title px-4 collapse-title text-white ${
            redemptions?.includes(item._id) || checkExpiration()
              ? "bg-slate-500"
              : "bg-primary"
          }`}
        >
          <p>{item.rewardTitle}</p>
          <span className="icon__container">
            <img
              src={item.imgUrl}
              alt={item.rewardTitle}
              className="reward__icon bg-white"
            />
          </span>
        </div>
        {isOpen && (
          <div className="collapse-content">
            <div className="collapse-container py-4">
              <div className="collapse-header px-4">
                {item.imgUrl && (
                  <div>
                    <img
                      src={item.imgUrl}
                      alt="reward"
                      className="reward__image"
                    />
                  </div>
                )}
                {item.businessDescription && (
                  <div className="reward__business-description">
                    <p>
                      <strong>{item.businessDescription}</strong>
                    </p>
                  </div>
                )}
              </div>
              <div className="reward__info space-y-4 py-4">
                <div>
                  {item.rewardExtras && (
                    <div>
                      <p className="">
                        <strong>Anytime Reward: </strong>
                        {item.rewardExtras}
                      </p>
                    </div>
                  )}
                </div>
                <p>
                  <strong>One-time Reward:</strong> {item.offer}
                </p>
              </div>
              {checkExpiration() ? (
                <button
                  className="reward-redeem-btn btn btn-wide btn-disabled"
                  disabled
                >
                  Expired
                </button>
              ) : (
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
              )}
              <p className="pt-4">
                <strong>Terms and Conditions:</strong>
              </p>
              <p className="text-center">{item.rewardTerms}</p>
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
                  loading ? "btn-disabled" : "btn-secondary"
                }`}
                onClick={handleRedeem}
                disabled={loading}
              >
                {loading ? "Loading Reward" : "Yes, Redeem Now"}
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
              {activeReward?.rewardTitle}
            </p>
            <hr className="my-3 mx-10 h-0.5 border-t-0 bg-primary opacity-100 dark:opacity-50" />
            <p className="text-center">{activeReward?.offer}</p>
          </div>
          <p className="text-center ">Redeemed at</p>
          <p className="text-center">
            {formattedDateAndTime(currentRedemption?.redeemedAt)}{" "}
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
}

const Accordion = ({
  rewards,
  openIndex,
  toggleItem,
  activeReward,
  setActiveReward,
  handleRedemption,
  redemptions,
  setRedemptions,
  loading,
  currentRedemption,
  setCurrentRedemption,
}) => {
  return (
    <div>
      {rewards
        .slice()
        // eslint-disable-next-line array-callback-return
        .sort((a, b) => {
          if (redemptions && Array.isArray(redemptions)) {
            // Check if a or b is in props.redemptions
            const aIsRedeemed = redemptions.includes(a._id);
            const bIsRedeemed = redemptions.includes(b._id);
            const aIsExpired = new Date(a.expirationDate) < new Date();
            const bIsExpired = new Date(b.expirationDate) < new Date();

            // If both are redeemed or both are not, sort alphabetically
            if (aIsRedeemed === bIsRedeemed && aIsExpired === bIsExpired) {
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

            // If only a is expired, move it to the bottom
            if (aIsExpired) {
              return 1;
            }

            // If only b is expired, move it to the bottom
            if (bIsExpired) {
              return -1;
            }
          }
        })
        .map((item, index) => (
          <AccordionItem
            handleRedemption={handleRedemption}
            key={item._id}
            item={item}
            isOpen={index === openIndex}
            toggleItem={() => toggleItem(index)}
            activeReward={activeReward}
            setActiveReward={setActiveReward}
            redemptions={redemptions}
            setRedemptions={setRedemptions}
            loading={loading}
            currentRedemption={currentRedemption}
            setCurrentRedemption={setCurrentRedemption}
          />
        ))}
    </div>
  );
};

const Rewards = ({
  rewards,
  handleRedemption,
  redemptions,
  setRedemptions,
  loading,
  currentRedemption,
  setCurrentRedemption,
}) => {
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
          handleRedemption={handleRedemption}
          rewards={rewards}
          openIndex={openIndex}
          toggleItem={toggleItem}
          activeReward={activeReward}
          setActiveReward={setActiveReward}
          redemptions={redemptions}
          setRedemptions={setRedemptions}
          loading={loading}
          currentRedemption={currentRedemption}
          setCurrentRedemption={setCurrentRedemption}
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

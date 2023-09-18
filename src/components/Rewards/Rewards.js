import React, { useState } from "react";
import "./Rewards.css";
import rewardsList from "../../utils/rewardsList";
import { useCurrentPass } from "../../contexts/CurrentPassContext";
import api from "../../utils/api";

const AccordionItem = ({
  title,
  location,
  reward,
  limitations,
  extras,
  imageSrc,
  isOpen,
  toggleItem,
  rewardId,
  setError,
}) => {
  const { currentPass } = useCurrentPass();

  const handleRedeem = (e) => {
    e.preventDefault();
    api
      .redeemReward({
        rewardId: rewardId,
        pass: currentPass,
      })
      .then((res) => {
        if (res) {
          setError(null);
          document.getElementById("confirm-modal").close();
          document.getElementById("redeem-modal").showModal();
        } else {
          setError(res.message);
        }
      });
  };

  return (
    <div className="collapse bg-white">
      <div
        className={`accordion__item ${isOpen ? "open" : ""}`}
        onClick={toggleItem}
      >
        <div className="collapse-title text-xl text-white font-medium bg-primary">
          <span>{title}</span>
          <span
            className={`accordion__icon ${isOpen ? "rotate-180" : ""}`}
          ></span>
        </div>
        {isOpen && (
          <div className="collapse-content">
            <div className="reward-container">
              <div className="redeem-content">
                {imageSrc && (
                  <div>
                    <img src={imageSrc} alt="reward" className="reward-image" />
                  </div>
                )}
                <div className="redeem-info">
                  <p>
                    <strong>Location:</strong> {location}
                  </p>
                  <p>
                    <strong>Reward:</strong> {reward}
                  </p>
                  <p>
                    <strong>Limitations:</strong> {limitations}
                  </p>
                </div>
              </div>
              <button
                className="reward-redeem-btn btn btn-wide btn-secondary"
                onClick={() =>
                  document.getElementById("confirm-modal").showModal()
                }
              >
                Redeem Now
              </button>
              <div>
                {extras && (
                  <div className="reward-extras text-center">
                    <p>
                      <strong>PLUS During October:</strong> {extras}
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
              <button className="btn btn-secondary" onClick={handleRedeem}>
                Yes, Redeem Now
              </button>
              <button className="btn">No, Cancel</button>
            </form>
          </div>
        </div>
      </dialog>
      <dialog id="redeem-modal" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">{location} Reward!</h3>
          <p className="py-4">
            You have successfully redeemed your reward of {reward}! Please show
            this screen to the business to claim your reward.
          </p>
          <p className="py-4">Reward good for {currentPass.passAmt} people.</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">
                All Finished, check out other rewards.
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

const Accordion = ({ items, openIndex, toggleItem }) => {
  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          location={item.location}
          reward={item.reward}
          limitations={item.limitations}
          extras={item.extras}
          imageSrc={item.imageSrc}
          isOpen={index === openIndex}
          toggleItem={() => toggleItem(index)}
        />
      ))}
    </div>
  );
};

const Rewards = () => {
  const [openIndex, setOpenIndex] = useState(-1); // Initialize with -1 to have no item open by default

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
          items={rewardsList}
          openIndex={openIndex}
          toggleItem={toggleItem}
        />
      </div>
    </section>
  );
};

export default Rewards;

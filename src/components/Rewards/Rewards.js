import React, { useState } from "react";
import "./Rewards.css";
import rewardsList from "../../utils/rewardsList";

const AccordionItem = ({
  title,
  location,
  reward,
  limitations,
  extras,
  imageSrc,
  isOpen,
  toggleItem,
}) => {
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
              <button className="reward-redeem-btn btn btn-wide btn-secondary">
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

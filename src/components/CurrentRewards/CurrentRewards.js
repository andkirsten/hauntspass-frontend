import React, { useState } from "react";
import "./CurrentRewards.css";

const AccordionItem = (props) => {
  const onClick = () => {
    props.toggleItem(props.index);
    props.setActiveReward(props.item);
  };

  return (
    <div className="collapse bg-white">
      <div
        className={`accordion__item ${props.isOpen ? "open" : ""}`}
        onClick={onClick}
      >
        <div className="collapse-title text-xl font-medium">
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
    </div>
  );
};

const Accordion = (props) => {
  return (
    <div>
      {props.rewards.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          isOpen={index === props.openIndex}
          toggleItem={() => props.toggleItem(index)}
          activeReward={props.activeReward}
          setActiveReward={props.setActiveReward}
        />
      ))}
    </div>
  );
};

const CurrentRewards = (props) => {
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
    <section
      className="current-rewards flex flex-col
     justify-center items-center p-4"
    >
      <h2 className="current-rewards-title">Current Reward Offers</h2>
      <div className="w-full accordion-container">
        <Accordion
          rewards={props.rewards}
          openIndex={openIndex}
          toggleItem={toggleItem}
          activeReward={activeReward}
          setActiveReward={setActiveReward}
        />
      </div>
    </section>
  );
};

export default CurrentRewards;

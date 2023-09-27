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
        <div className="cr__banner text-white collapse-title bg-primary">
          <p className="cr__title">{props.item.rewardTitle}</p>
          <span>
            <img
              src={props.item.imgUrl}
              alt={props.item.rewardTitle}
              className="cr__icon"
            />
          </span>
        </div>
        {props.isOpen && (
          <div className="collapse-content">
            <div className="collapse-container">
              <div className="collapse-header">
                <div>
                  <img
                    src={props.item.imgUrl}
                    alt="reward"
                    className="cr__image"
                  />
                </div>
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
                      <strong>Reward Valid Anytime:</strong>{" "}
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
      {props.rewards
        .slice() // Create a shallow copy of the rewards array
        .sort((a, b) => a.rewardTitle.localeCompare(b.rewardTitle)) // Sort alphabetically by title
        .map((item, index) => (
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
    <section className="flex flex-col justify-center items-center">
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

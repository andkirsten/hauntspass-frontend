import React, { useState } from 'react';
import './CurrentRewards.css';

function AccordionItem(props) {
  const onClick = () => {
    props.toggleItem(props.index);
    props.setActiveReward(props.item);
  };

  return (
    <div className="collapse mb-3 bg-white">
      <div
        className={`accordion__item ${props.isOpen ? 'open' : ''}`}
        onClick={onClick}
      >
        <div className="cr__banner px-4 text-white collapse-title bg-primary">
          <p>{props.item.rewardTitle}</p>
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
            <div className="collapse-container py-4">
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
              <div className="space-y-4 py-4">
                <div>
                  {props.item.rewardExtras && (
                    <div>
                      <p>
                        <strong>Anytime Reward: </strong>
                        {props.item.rewardExtras}
                      </p>
                    </div>
                  )}
                </div>
                <p>
                  <strong>One-time Reward:</strong>
                  {' '}
                  {props.item.offer}
                </p>
              </div>
              <div>
                <p>
                  <strong>Terms and Conditions:</strong>
                </p>
                <p>{props.item.rewardTerms}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Accordion(props) {
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
}

function CurrentRewards(props) {
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
      <div className="w-full accordion-container pt-5">
        <Accordion
          rewards={props.rewards}
          openIndex={openIndex}
          toggleItem={toggleItem}
          activeReward={activeReward}
          setActiveReward={setActiveReward}
        />
      </div>
      <p className="text-center p-10">
        All businesses reserve the right to make adjustments to offers as needed
        during the fundraiser period.
      </p>
    </section>
  );
}

export default CurrentRewards;

import React, { useState } from "react";

import "./Rewards.css";

const AccordionItem = ({
  title,
  location,
  reward,
  limitations,
  imageSrc,
  isOpen,
  toggleItem,
}) => {
  return (
    <div className="collapse bg-base-200">
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
              {imageSrc && (
                <div className="reward-image">
                  <img src={imageSrc} alt="reward" />
                </div>
              )}
              <div>
                <p>Location: {location}</p>
                <p>Reward: {reward}</p>
                <p>Limitations: {limitations}</p>
              </div>
              <div className="reward-redeem-btn">
                <button className="btn btn-secondary">Redeem</button>
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

  const accordionItems = [
    {
      title: "Harmons Grocery Store: Free Ice Cream Cone",
      location: "Harmons on Center Street",
      reward: "Free Ice Cream Cone",
      limitations: "One per pass",
      imageSrc: "/images/harmons.png",
    },
    {
      title: "Cupbap: Free Mandu",
      location: "Cupbap on 40th South",
      reward: "Free order of Mandu",
      limitations: "One per pass",
      imageSrc: "",
    },
    {
      title: "Haunts Mini Gold: %50 off game",
      location: "Haunts Mini Golf on 1948 West",
      reward: "%50 percent off one game",
      limitations: "One per passholder",
      imageSrc: "",
    },
  ];

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
    <div className="flex justify-center items-center p-4">
      <div className="w-full accordion-container">
        <Accordion
          items={accordionItems}
          openIndex={openIndex}
          toggleItem={toggleItem}
        />
      </div>
    </div>
  );
};

export default Rewards;

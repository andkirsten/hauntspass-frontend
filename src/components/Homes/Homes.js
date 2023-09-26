// import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./Homes.css";
// import { HOMES_LIST } from "../../utils/HOMES_LIST";

// const AccordionItem = ({ title, homes, isOpen, toggleItem }) => {
//   return (
//     <div className="collapse bg-white">
//       <div
//         className={`accordion__item ${isOpen ? "open" : ""}`}
//         onClick={toggleItem}
//       >
//         <div className="collapse-title text-xl text-white font-medium bg-primary">
//           <span>{title}</span>
//           <span
//             className={`accordion__icon ${isOpen ? "rotate-180" : ""}`}
//           ></span>
//         </div>
//         {isOpen && (
//           <div className="collapse-content">
//             <ul className="home-list list-disc">
//               {homes.map((home) => (
//                 <li>{home}</li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const Accordion = ({ items, openIndex, toggleItem }) => {
//   return (
//     <div>
//       {items.map((item, index) => (
//         <AccordionItem
//           key={index}
//           title={item.title}
//           homes={item.homes}
//           isOpen={index === openIndex}
//           toggleItem={() => toggleItem(index)}
//         />
//       ))}
//     </div>
//   );
// };

const Homes = () => {
  // const [openIndex, setOpenIndex] = useState(-1); // Initialize with -1 to have no item open by default

  // const toggleItem = (index) => {
  //   if (openIndex === index) {
  //     // Clicked on the currently open item, close it
  //     setOpenIndex(-1);
  //   } else {
  //     // Clicked on a different item, open it
  //     setOpenIndex(index);
  //   }
  // };

  return (
    <section className="homes flex justify-center items-center p-4">
      <h3 className="text-2xl font-medium mb-4 text-center">
        Home List Coming Soon...
      </h3>
      {/* <Link to="/map" className="map-btn btn btn-wide bg-white border-black">
        View the Map
      </Link>
      <div className="w-full accordion-container">
        <Accordion
          items={HOMES_LIST}
          openIndex={openIndex}
          toggleItem={toggleItem}
        />
      </div> */}
    </section>
  );
};

export default Homes;

import React, { useState } from "react";
import "./Popular.css";

const Popular = ({ popularEvents }) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="popular-container">
      <div className="wrapper">
        {popularEvents.map((item, index) => {
          const total = popularEvents.length;
          const relativeIndex = (index - activeIndex + total) % total; // Ensures circular positioning

          let positionClass = "";
          if (relativeIndex === 0) {
            positionClass = "active"; // Center item
          } else if (relativeIndex === 1) {
            positionClass = "right"; // Right of center
          } else if (relativeIndex === total - 1) {
            positionClass = "left"; // Left of center
          } else {
            positionClass = "hidden"; // Hide other items
          }

          return (
            <div
              key={index}
              className={`item ${positionClass}`}
              onClick={() => handleClick(index)}
              style={{ backgroundImage: `url(${item.img})` }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Popular;

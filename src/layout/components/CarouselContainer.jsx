import React from "react";

const CarouselContainer = ({ icon, title, text }) => {
  return (
    <div className="carousel-container">
      <div className="icon">
        <img src={icon} alt="" />
      </div>
      <div className="text">
        {title}
        {text}
      </div>
    </div>
  );
};

export default CarouselContainer;

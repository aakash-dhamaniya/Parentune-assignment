import React from "react";
import "./CarouselContainer.css"
const CarouselContainer = ({ icon, title, text }) => {
  return (
    <div className="carousel-container">
      <div className="icon">
        <img src={icon} alt="" />
      </div>
      
      <div className="texts">
      <div className="title">{title}</div>
      <div className="text">{text}</div>
        
      </div>
    </div>
  );
};

export default CarouselContainer;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import customArrow from "./customArrow";
import n from "../../assets/n.png";
import upgraph from "../../assets/upgraph.png";
import btc from "../../assets/btc.png";
import CarouselContainer from "./CarouselContainer";
import "./carousel.css"
const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <CarouselContainer icon={n} text={<p>Learn and earn $CKB</p> } title={<p>Take a quiz!</p>}/>
        <CarouselContainer icon={upgraph} text={<p>Track your trades in one place, not all over the place</p> } title={<p>Portfolio 🔥</p>}/>
        <CarouselContainer icon={n} text={<p>Track your trades in one place, not all over the place</p> } title={<p>Portfolio</p>}/>
      </Slider>
    </div>
  );
};

export default Carousel;

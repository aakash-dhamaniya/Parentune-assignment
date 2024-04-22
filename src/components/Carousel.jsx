import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import n from "../assets/n.png";
import upgraph from "../assets/upgraph.png";
import btc from "../assets/btc.png";
import CarouselContainer from "./CarouselContainer";
import "./carousel.css";
import leftArrow from "../assets/leftArrow.png"
import rightArrow from "../assets/rightArrow.png"
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
    src={rightArrow}
      className={className}
      style={{ ...style, display: "block"  }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
    src={leftArrow}
      className={className}
      style={{ ...style, display: "block"  }}
      onClick={onClick}
    />
  );
}
const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // Devices with width less than 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600, // Devices with width less than 600px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480, // Devices with width less than 480px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: false,
          prevArrow: false,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <CarouselContainer
          icon={n}
          text={<p>Learn and earn $CKB</p>}
          title={<p>Take a quiz!</p>}
        />
        <CarouselContainer
          icon={upgraph}
          text={<p>Track your trades in one place, not all over the place</p>}
          title={<p>Portfolio 🔥</p>}
        />
        <CarouselContainer
          icon={btc}
          text={
            <p className="title">
              Track your trades in one place, not all over the place
            </p>
          }
          title={<p>Portfolio</p>}
        />
      </Slider>
    </div>
  );
};

export default Carousel;

import React from "react";
import Slider from "../../UI/Slider/Slider";
import HeroSlide from "./HeroSlide/HeroSlide";

const HeroSlider = () => {
  const imagesSources = [
    "/images/Slider/slider-img-1.jpg",
    "/images/Slider/slider-img-2.jpg",
    "/images/Slider/slider-img-3.jpg",
  ];
  return (
    <Slider autoPlay={true} infiniteLoop={true} interval={3000}>
      {imagesSources.map((imgSrc) => (
        <HeroSlide key={imgSrc} background={imgSrc} />
      ))}
    </Slider>
  );
};

export default HeroSlider;

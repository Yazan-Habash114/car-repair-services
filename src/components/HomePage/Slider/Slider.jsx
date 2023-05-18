import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slide from "./Slide/Slide";

const Slider = () => {
  const imagesSources = [
    "/images/Slider/slider-img-1.jpg",
    "/images/Slider/slider-img-2.jpg",
    "/images/Slider/slider-img-3.jpg",
  ];
  return (
    <Carousel autoPlay infiniteLoop>
      {imagesSources.map((imgSrc) => (
        <Slide background={imgSrc} />
      ))}
    </Carousel>
  );
};

export default Slider;

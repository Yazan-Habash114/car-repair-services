import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slide from "./Slide/Slide";

const Slider = () => {
  return (
    <Carousel autoPlay infiniteLoop>
      <Slide background="/images/slider-img-1.jpg" />
      <Slide background="/images/slider-img-2.jpg" />
      <Slide background="/images/slider-img-3.jpg" />
    </Carousel>
  );
};

export default Slider;

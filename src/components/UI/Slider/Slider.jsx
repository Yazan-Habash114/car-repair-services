import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = ({ children, autoPlay, infiniteLoop, interval }) => {
  return (
    <Carousel
      autoPlay={autoPlay}
      infiniteLoop={infiniteLoop}
      showThumbs={false}
      interval={interval}
    >
      {children}
    </Carousel>
  );
};

export default Slider;

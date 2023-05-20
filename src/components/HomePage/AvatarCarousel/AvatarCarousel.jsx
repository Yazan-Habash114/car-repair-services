import React from "react";
import Slider from "../../UI/Slider/Slider";
import AvatarSlide from "./AvatarSlide/AvatarSlide";
import styled from "styled-components";
import { avatars } from "./data.js";

const Container = styled.section`
  margin-top: 200px;
`;

const AvatarCarousel = () => {
  return (
    <Container>
      <Slider autoPlay={true} infiniteLoop={true} interval={8000}>
        {avatars.map(({ name, speech, img }) => (
          <AvatarSlide key={name} name={name} speech={speech} img={img} />
        ))}
      </Slider>
    </Container>
  );
};

export default AvatarCarousel;

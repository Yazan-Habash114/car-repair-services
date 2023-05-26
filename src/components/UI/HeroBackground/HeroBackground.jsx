import React from "react";
import styled from "styled-components";
import AlignedContainer from "../AlignedContainer/AlignedContainer";

const Background = styled.div`
  background-image: url("/images/HowItWorks/HowItWorks.png");
  background-attachment: fixed;
  padding: 220px 0;
`;

const HeroBackground = ({ children }) => {
  return (
    <Background>
      <AlignedContainer>{children}</AlignedContainer>
    </Background>
  );
};

export default HeroBackground;

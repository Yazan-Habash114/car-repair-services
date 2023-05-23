import React from "react";
import styled from "styled-components";
import AlignedContainer from "../../UI/AlignedContainer/AlignedContainer";
import GarageInfo from "./GarageInfo/GarageInfo";

const Background = styled.div`
  background-image: url("/images/HowItWorks/HowItWorks.png");
  background-attachment: fixed;
  padding: 220px 0;
`;

const HeroBackground = () => {
  return (
    <Background>
      <AlignedContainer>
        <GarageInfo />
      </AlignedContainer>
    </Background>
  );
};

export default HeroBackground;

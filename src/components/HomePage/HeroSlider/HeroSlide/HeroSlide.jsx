import React from "react";
import styled, { useTheme } from "styled-components";
import TernaryHeading from "../../../UI/Headings/TernaryHeading";
import MainHeading from "../../../UI/Headings/MainHeading";
import Sentence from "../../../UI/Sentence/Sentence";

const Container = styled.div`
  background-image: ${(props) => `url(${props.background})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 800px;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeroSlide = ({ background }) => {
  const myTheme = useTheme();
  return (
    <Container background={background}>
      <TernaryHeading
        text="Trust Your Vehicle to"
        theme={myTheme.default}
        fontSize="24px"
      />
      <MainHeading text="Certified" theme={myTheme.primary} fontSize="80px" />
      <MainHeading text="Techniques" theme={myTheme.primary} fontSize="80px" />
      <Sentence
        text="Service, Maintenance & Repair by the certified service experts"
        theme={myTheme.default}
        margin="4rem 0 0 0"
      />
    </Container>
  );
};

export default HeroSlide;

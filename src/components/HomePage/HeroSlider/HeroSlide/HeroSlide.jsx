import React from "react";
import styled, { useTheme } from "styled-components";
import TernaryHeading from "../../../UI/Headings/TernaryHeading";
import MainHeading from "../../../UI/Headings/MainHeading";
import Sentence from "../../../UI/Sentence/Sentence";
import { Mobile } from "../../../../globals/responsive";

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

  ${Mobile({
    height: "600px",
  })}
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeroSlide = ({ background }) => {
  const myTheme = useTheme();

  return (
    <Container background={background}>
      <TextBox>
        <TernaryHeading
          text="Trust Your Vehicle to"
          theme={myTheme.default}
          fontSize="24px"
        />
        <MainHeading
          text="Certified Techniques"
          theme={myTheme.primary}
          fontSize="80px"
        />
        <Sentence
          text="Service, Maintenance & Repair by the certified service experts"
          theme={myTheme.default}
          margin="1.2rem 0 0 0"
        />
      </TextBox>
    </Container>
  );
};

export default HeroSlide;

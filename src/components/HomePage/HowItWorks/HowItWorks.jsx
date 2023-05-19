import React from "react";
import styled, { useTheme } from "styled-components";
import MainHeading from "../../UI/Headings/MainHeading";
import Sentence from "../../UI/Sentence/Sentence";
import Steps from "./Steps/Steps";

const Container = styled.section`
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 0;
  background-image: url("/images/HowItWorks/HowItWorks.png");
  background-size: cover;
`;

const HowItWorks = () => {
  const myTheme = useTheme();
  return (
    <Container>
      <MainHeading text="How It Works" theme={myTheme.primary} />
      <Sentence
        classStyle="section-par-white"
        text="These few steps will help you understand how our services works"
      />
      <Steps />
    </Container>
  );
};

export default HowItWorks;

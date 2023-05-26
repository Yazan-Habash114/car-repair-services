import React from "react";
import styled, { useTheme } from "styled-components";
import SecondaryHeading from "../../UI/Headings/SecondaryHeading";
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
  background-attachment: fixed;
  text-align: center;
`;

const HowItWorks = () => {
  const myTheme = useTheme();
  return (
    <Container>
      <SecondaryHeading
        text="How It Works"
        theme={myTheme.primary}
        fontSize="48px"
      />
      <Sentence
        text="These few steps will help you understand how our services works"
        fontWeight={300}
        theme={myTheme.default}
        fontSize="24px"
      />
      <Steps />
    </Container>
  );
};

export default HowItWorks;

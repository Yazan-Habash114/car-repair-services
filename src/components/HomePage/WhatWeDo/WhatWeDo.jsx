import React from "react";
import styled from "styled-components";
import MainHeading from "../../UI/Headings/MainHeading";
import Sentence from "../../UI/Sentence/Sentence";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WhatWeDo = () => {
  return (
    <Container>
      <MainHeading text="What We Do" />
      <Sentence
        classStyle="section-par"
        text="We offer full service auto repair & maintenance"
      />
    </Container>
  );
};

export default WhatWeDo;

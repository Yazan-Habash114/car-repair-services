import React from "react";
import styled from "styled-components";
import MainHeading from "../../../UI/Headings/MainHeading";
import Sentence from "../../../UI/Sentence/Sentence";
import Numbers from "../Numbers/Numbers";

const Container = styled.div`
  width: 500px;
`;

const LeftSide = () => {
  return (
    <Container>
      <MainHeading text="The Car Repair Statistics" />
      <Sentence
        text="Auto repair technical statistics you must to know. Whether you're coming in for a routine inspection, oil change or a repair service, we promise that you will be completely satisfied with our work."
        classStyle="paragraph-black"
      />
      <Numbers />
    </Container>
  );
};

export default LeftSide;

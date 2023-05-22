import React from "react";
import styled from "styled-components";
import SecondaryHeading from "../../../UI/Headings/SecondaryHeading";
import Sentence from "../../../UI/Sentence/Sentence";
import Numbers from "../Numbers/Numbers";

const Container = styled.div`
  width: 500px;
`;

const LeftSide = () => {
  return (
    <Container>
      <SecondaryHeading text="Car Repair Statistics" fontSize="48px" />
      <Sentence
        text="Auto repair technical statistics you must to know. Whether you're coming in for a routine inspection, oil change or a repair service, we promise that you will be completely satisfied with our work."
        margin="1rem 0 0 0"
      />
      <Numbers />
    </Container>
  );
};

export default LeftSide;

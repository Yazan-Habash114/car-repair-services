import React from "react";
import styled from "styled-components";
import TernaryHeading from "../../UI/Headings/TernaryHeading";
import QuarternHeading from "../../UI/Headings/QuarternHeading";
import Sentence from "../../UI/Sentence/Sentence";
import RegularButton from "../../UI/Buttons/RegularButton";
import Results from "./Results/Results";

const Container = styled.div``;

const Conclusion = ({ inferences, carType, problem }) => {
  return (
    <Container>
      <TernaryHeading
        text="Thanks for your time, we recognized your problem and help you to
            choose a garage"
      />
      <Sentence
        text={`The car type is ${carType}, your problem is ${problem}`}
      />
      <RegularButton text="Go to the map" />
      <QuarternHeading text="Results & Solutions" />
      <Results inferences={inferences} />
    </Container>
  );
};

export default Conclusion;

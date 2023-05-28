import React from "react";
import styled from "styled-components";
import ResultItem from "../ResultItem/ResultItem";
import Sentence from "../../../UI/Sentence/Sentence";
import { Tablet } from "../../../../globals/responsive";

const Container = styled.section`
  display: flex;
  justify-content: center;

  ${Tablet({ flexDirection: "column", alignItems: "center" })}
`;

const Results = ({ inferences }) => {
  return (
    <Container>
      {inferences.length < 1 && <Sentence text="No inferences concluded" />}
      {inferences.map((inference, index) => (
        <ResultItem inference={inference} index={index} />
      ))}
    </Container>
  );
};

export default Results;

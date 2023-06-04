import React from "react";
import styled from "styled-components";
import TernaryHeading from "../../../UI/Headings/TernaryHeading";
import Sentence from "../../../UI/Sentence/Sentence";
import { Mobile } from "../../../../globals/responsive";

const Item = styled.div`
  background-color: ${(props) => props.theme.background};
  width: 400px;
  margin: 1rem;
  padding: 1rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;

  ${Mobile({ width: "100%", margin: "1rem 0" })}
`;

const ResultItem = ({ index, inference }) => {
  return (
    <Item>
      <TernaryHeading text={`Result ${index + 1}`} />
      <Sentence text={`Inference: ${inference.attribute}`} />
      <Sentence text={`Details: ${inference.value}`} />
    </Item>
  );
};

export default ResultItem;

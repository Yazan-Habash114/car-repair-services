import React from "react";
import styled from "styled-components";
import Sentence from "../../../../UI/Sentence/Sentence";

const Item = styled.button`
  background-color: ${(props) =>
    props.isSelected ? props.theme.primary : props.theme.secondary};
  margin: 10px 0;
  padding: 8px 75px;
  border-radius: 5px;
  transition: 0.3s;
  outline: none;
  border: none;
  cursor: pointer;
  width: 300px;
  color: ${(props) =>
    props.isSelected ? props.theme.black : props.theme.default};
  word-wrap: normal;

  &:active {
    transform: scale(0.9);
  }
`;

const ChoiceItem = ({ text, selected, onSelectChoice, id }) => {
  return (
    <Item isSelected={selected == id} onClick={() => onSelectChoice(id)}>
      <Sentence text={text} fontSize="20px" />
    </Item>
  );
};

export default ChoiceItem;

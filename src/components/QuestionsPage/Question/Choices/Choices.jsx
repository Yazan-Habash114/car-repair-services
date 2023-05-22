import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import ChoiceItem from "./ChoiceItem/ChoiceItem";
import ButtonsWrapper from "./ButtonsWrapper/ButtonsWrapper";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Choices = ({ decisionTree, nextId, handleNextChoice }) => {
  const [selected, setSelected] = useState(null);
  const [selectedChoice, setSelectedChoice] = useState(null);

  const handleSelect = (index, choice) => {
    setSelected(index);
    setSelectedChoice(choice);
  };

  return (
    <Box>
      {decisionTree[nextId].choices.map((choice, index) => {
        return (
          <ChoiceItem
            key={index}
            id={index}
            text={choice.choiceText}
            selected={selected}
            onSelectChoice={(index) => handleSelect(index, choice)}
          />
        );
      })}

      <ButtonsWrapper
        onNextClick={() => {
          handleNextChoice(selectedChoice);
          setSelected(-1);
          setSelectedChoice(null);
        }}
      />
    </Box>
  );
};

export default Choices;
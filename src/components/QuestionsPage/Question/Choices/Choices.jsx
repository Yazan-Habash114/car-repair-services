import React, { useState } from "react";
import styled from "styled-components";
import ChoiceItem from "./ChoiceItem/ChoiceItem";
import ButtonsWrapper from "./ButtonsWrapper/ButtonsWrapper";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Choices = ({
  decisionTree,
  nextId,
  handleNextChoice,
  handlePreviousChoice,
}) => {
  const [selected, setSelected] = useState(null);
  const [selectedChoice, setSelectedChoice] = useState(null);

  function delay(duration) {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        resolve();
      }, duration)
    );
  }

  const handleSelect = (index, choice) => {
    setSelected(index);
    setSelectedChoice(choice);
  };

  const handleNext = () => {
    delay(300).then(() => {
      handleNextChoice(selectedChoice);
      setSelected(-1);
      setSelectedChoice(null);
    });
  };

  const handlePrevious = () => {
    delay(300).then(() => {
      handlePreviousChoice();
      setSelected(-1);
      setSelectedChoice(-1);
    });
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
        onNextClick={handleNext}
        onPreviousClick={handlePrevious}
      />
    </Box>
  );
};

export default Choices;

import React, { useState } from "react";
import styled from "styled-components";
import ChoiceItem from "./ChoiceItem/ChoiceItem";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Choices = () => {
  const [selected, setSelected] = useState(null);
  const choices = ["Choice 1", "Choice 2", "Choice 3"];

  const handleSelect = (index) => setSelected(index);

  return (
    <Box>
      {choices.map((choice, index) => (
        <ChoiceItem
          key={index}
          id={index}
          text={choice}
          selected={selected}
          onSelectChoice={(index) => handleSelect(index)}
        />
      ))}
    </Box>
  );
};

export default Choices;

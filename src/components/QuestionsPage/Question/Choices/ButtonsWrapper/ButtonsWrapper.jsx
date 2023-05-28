import React from "react";
import styled, { useTheme } from "styled-components";
import RegularButton from "../../../../UI/Buttons/RegularButton";

const Wrapper = styled.div`
  display: flex;
`;

const ButtonsWrapper = ({ onNextClick, onPreviousClick }) => {
  const myTheme = useTheme();
  return (
    <Wrapper>
      <RegularButton
        text="Back"
        theme={myTheme.secondary}
        margin="1rem 0.5rem"
        onClickHandler={onPreviousClick}
      />
      <RegularButton
        text="Next"
        background={myTheme.primary}
        margin="1rem 0.5rem"
        onClickHandler={onNextClick}
      />
    </Wrapper>
  );
};

export default ButtonsWrapper;

import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: ${(props) => props.theme};
  background: ${(props) => props.background};
  font-size: 14px;
  font-weight: bold;
  padding: 12px 35px;
  border-radius: 3px;
  margin: ${(props) => props.margin || "1rem 0"};
  border: 1px solid ${(props) => props.borderColor};
  outline: none;
  letter-spacing: 1px;
  transition: 300ms;
  cursor: pointer;

  &:active {
    transform: scale(0.9);
  }

  &:hover {
    background-color: ${(props) => props.borderColor};
  }
`;

const RegularButton = ({ text, theme, borderColor, background, margin }) => {
  return (
    <Button
      theme={theme}
      borderColor={borderColor}
      background={background}
      margin={margin}
    >
      {text}
    </Button>
  );
};

export default RegularButton;

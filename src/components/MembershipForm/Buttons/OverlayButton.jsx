import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: ${(props) => props.theme.default};
  background-color: transparent;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 55px;
  margin: 20px;
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.default};
  outline: none;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  cursor: pointer;

  &:active {
    transform: scale(0.9);
  }
`;

const OverlayButton = ({ children, clickHandler }) => {
  return <Button onClick={clickHandler}>{children}</Button>;
};

export default OverlayButton;

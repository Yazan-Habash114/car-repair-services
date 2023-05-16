import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: ${(props) => props.theme.secondary};
  background: ${(props) => props.theme.primary};
  font-size: 12px;
  font-weight: bold;
  padding: 12px 55px;
  margin: 20px;
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.primary};
  outline: none;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  cursor: pointer;

  &:active {
    transform: scale(0.9);
  }
`;

const SubmitButton = ({ text }) => {
  return <Button>{text}</Button>;
};

export default SubmitButton;

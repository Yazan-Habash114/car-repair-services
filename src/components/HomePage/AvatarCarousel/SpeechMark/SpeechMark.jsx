import React from "react";
import styled from "styled-components";

const Mark = styled.p`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.default};
  font-size: 24px;
  padding: 10px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpeechMark = ({ children }) => {
  return <Mark>{children}</Mark>;
};

export default SpeechMark;

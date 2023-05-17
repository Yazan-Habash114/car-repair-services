import React from "react";
import styled from "styled-components";

const Heading = styled.h1`
  font-weight: 700;
  color: ${(props) => props.color};
  font-size: 62px;
`;

const EmphasizedHeading = ({ text, theme }) => {
  return <Heading color={theme}>{text}</Heading>;
};

export default EmphasizedHeading;

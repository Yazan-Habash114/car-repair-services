import React from "react";
import styled from "styled-components";

const Heading = styled.h3`
  color: ${(props) => props.color};
  font-weight: 600;
  margin: 2rem 0;
`;

const TernaryHeading = ({ text, theme }) => {
  return <Heading color={theme}>{text}</Heading>;
};

export default TernaryHeading;

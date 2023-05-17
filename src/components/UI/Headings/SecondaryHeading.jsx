import React from "react";
import styled from "styled-components";

const Heading = styled.h2`
  color: ${(props) => props.color};
  font-weight: 600;
`;

const SecondaryHeading = ({ text, theme }) => {
  return <Heading color={theme}>{text}</Heading>;
};

export default SecondaryHeading;

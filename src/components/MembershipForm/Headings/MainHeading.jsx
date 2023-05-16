import React from "react";
import styled from "styled-components";

const Heading = styled.h1`
  font-weight: bold;
  margin: 0;
`;

const MainHeading = ({ text }) => {
  return <Heading>{text}</Heading>;
};

export default MainHeading;

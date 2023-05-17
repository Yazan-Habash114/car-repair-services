import React from "react";
import styled from "styled-components";

const Heading = styled.h1`
  font-weight: bold;
  margin: 0;
  color: ${(props) => (props.color ? props.color : "black")};
  font-size: ${(props) => (props.size ? props.size : "44px")};
`;

const MainHeading = ({ text, theme, size }) => {
  return (
    <Heading color={theme} size={size}>
      {text}
    </Heading>
  );
};

export default MainHeading;

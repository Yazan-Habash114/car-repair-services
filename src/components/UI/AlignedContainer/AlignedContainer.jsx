import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 8rem;
`;

const AlignedContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default AlignedContainer;

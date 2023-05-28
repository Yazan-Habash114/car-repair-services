import React from "react";
import styled from "styled-components";
import { MediumScreen } from "../../../globals/responsive";

const Container = styled.div`
  margin: 0 8rem;

  ${MediumScreen({ margin: 0 })}
`;

const AlignedContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default AlignedContainer;

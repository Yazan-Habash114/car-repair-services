import React from "react";
import styled from "styled-components";
import { MediumScreen } from "../../../../globals/responsive";

const Container = styled.div`
  margin: 6rem 1.5rem;
  width: 320px;

  &:first-child {
    margin: 6rem 0;
  }

  ${MediumScreen({ marginBottom: "40px", marginTop: 0, width: "100%" })}
`;

const Column = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Column;

import React from "react";
import styled from "styled-components";
import { MediumScreen } from "../../../../globals/responsive";

const Container = styled.div`
  margin: 6rem 0;
  flex: 1;

  ${MediumScreen({ margin: "1.2rem 0", width: "400px", textAlign: "center" })}
`;

const Column = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Column;

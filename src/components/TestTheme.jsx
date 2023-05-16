import React from "react";
import styled, { useTheme } from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.secondary};
`;

const Header = () => {
  console.log(useTheme());
  return <Container>Test theme using styled components</Container>;
};

export default Header;

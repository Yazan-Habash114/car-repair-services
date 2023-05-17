import React from "react";
import styled from "styled-components";
import NavItems from "./NavItems/NavItems";
import GetStarted from "./GetStarted/GetStarted";

const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  background-color: ${(props) => props.theme.background};
`;

const Navbar = () => {
  return (
    <Container>
      <NavItems />
      <GetStarted />
    </Container>
  );
};

export default Navbar;

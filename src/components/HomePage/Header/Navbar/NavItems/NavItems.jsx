import React from "react";
import styled from "styled-components";
import NavItem from "../Item/NavItem";

const Items = styled.ul`
  display: flex;
  justify-content: space-between;
  border: 2px solid red;
`;

const NavItems = () => {
  return (
    <Items>
      <NavItem link="Home" target={"/"} />
      <NavItem link="About" target={"/"} />
      <NavItem link="Map" target={"/"} />
    </Items>
  );
};

export default NavItems;

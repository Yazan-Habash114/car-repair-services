import React from "react";
import styled from "styled-components";
import NavItem from "../Item/NavItem";
import { Tablet } from "../../../../../globals/responsive";

const Items = styled.ul`
  display: flex;
  justify-content: space-between;

  ${Tablet({ flexDirection: "column", marginBottom: "2rem" })}
`;

const NavItems = () => {
  const navLinks = [
    {
      linkName: "Home",
      linkTarget: "/",
    },
    {
      linkName: "About",
      linkTarget: "/",
    },
    {
      linkName: "Map",
      linkTarget: "/map",
    },
  ];

  return (
    <Items>
      {navLinks.map((navLink) => (
        <NavItem
          key={navLink.linkName}
          link={navLink.linkName}
          target={navLink.linkTarget}
        />
      ))}
    </Items>
  );
};

export default NavItems;

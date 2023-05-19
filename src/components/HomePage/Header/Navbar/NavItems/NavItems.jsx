import React from "react";
import styled from "styled-components";
import NavItem from "../Item/NavItem";

const Items = styled.ul`
  display: flex;
  justify-content: space-between;
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
      linkTarget: "/",
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

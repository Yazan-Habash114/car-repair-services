import React from "react";
import styled from "styled-components";
import NavItem from "../Item/NavItem";
import { Landscape } from "../../../../../globals/responsive";
import { useCookies } from "react-cookie";

const Items = styled.ul`
  display: flex;
  justify-content: space-between;

  ${Landscape({ flexDirection: "column", marginBottom: "2rem" })}
`;

const NavItems = () => {
  const [cookies] = useCookies(["id"]);

  const navLinks = [
    {
      linkName: "Home",
      linkTarget: "/",
    },
    {
      linkName: "Profile",
      linkTarget: `/profile/${cookies.id}`,
    },
    {
      linkName: "Diagnosis",
      linkTarget: "/questions",
    },
    {
      linkName: "Map",
      linkTarget: "/map",
    },
    {
      linkName: "Garages",
      linkTarget: "/search-garages",
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

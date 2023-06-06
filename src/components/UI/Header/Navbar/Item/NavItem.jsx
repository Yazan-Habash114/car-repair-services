import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Landscape } from "../../../../../globals/responsive";

const Link = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.text};
  margin-right: 6rem;
  font-weight: 600;
  transition: 0.3s ease-in;

  &:hover {
    color: ${(props) => props.theme.primary};
  }

  ${Landscape({ margin: "1rem 0" })}
`;

const NavItem = ({ link, target }) => {
  return <Link to={target}>{link}</Link>;
};

export default NavItem;

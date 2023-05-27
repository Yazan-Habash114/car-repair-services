import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Tablet } from "../../../../../globals/responsive";

const Link = styled(NavLink)`
  margin: 0 3rem;
  padding: 0.5rem 1.5rem;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.text};
  text-decoration: none;
  transition: 0.3s ease-out;
  font-weight: 600;
  border-radius: 10px;

  &:hover {
    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.default};
  }

  ${Tablet({ marginBottom: "1rem" })}
`;

const GetStarted = () => {
  return <Link to="/membership">Get Started</Link>;
};

export default GetStarted;

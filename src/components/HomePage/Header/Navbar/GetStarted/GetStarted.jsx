import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Link = styled(NavLink)`
  margin: 0 3rem;
  color: ${(props) => props.theme.text};
  text-decoration: none;
`;

const GetStarted = () => {
  return <Link to="/membership">Get Started</Link>;
};

export default GetStarted;

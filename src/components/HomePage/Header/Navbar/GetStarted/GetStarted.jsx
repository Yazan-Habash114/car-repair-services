import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Link = styled(NavLink)`
  margin: 0 3rem;
  color: ${(props) => props.theme.text};
  text-decoration: none;
  transition: 0.3s ease-out;
  font-weight: 600;

  &:hover {
    color: ${(props) => props.theme.primary};
  }
`;

const GetStarted = () => {
  return <Link to="/membership">Start the journey with us</Link>;
};

export default GetStarted;

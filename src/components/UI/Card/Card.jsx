import React from "react";
import styled from "styled-components";

const Item = styled.div`
  position: relative;
  margin: 1rem;
`;

const Card = ({ children }) => {
  return <Item>{children}</Item>;
};

export default Card;

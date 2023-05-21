import React from "react";
import styled from "styled-components";

const Item = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const Row = ({ children }) => {
  return <Item>{children}</Item>;
};

export default Row;

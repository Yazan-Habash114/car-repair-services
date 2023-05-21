import React from "react";
import styled from "styled-components";

const Layer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 87%);
`;

const DarkLayer = ({ children }) => {
  return <Layer>{children}</Layer>;
};

export default DarkLayer;

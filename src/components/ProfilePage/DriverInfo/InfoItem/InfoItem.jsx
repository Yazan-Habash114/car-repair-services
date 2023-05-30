import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const InfoItem = ({ children }) => {
  return <Container>{children}</Container>;
};

export default InfoItem;

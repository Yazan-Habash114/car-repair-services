import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 0.8rem;
  margin: 0.4rem 0;
`;

const InfoItem = ({ children }) => {
  return <Container>{children}</Container>;
};

export default InfoItem;

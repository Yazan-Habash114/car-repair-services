import React from "react";
import styled from "styled-components";
import { Mobile, Tablet } from "../../../../../globals/responsive";

const Item = styled.div`
  width: 360px;
  height: 360px;
  padding: 3rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${(props) => props.background};
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;

  ${Tablet({ width: "500px" })}
  ${Mobile({ width: "100%" })}
`;

const CatalogItem = ({ children, background, source }) => {
  return (
    <Item background={background} src={source}>
      {children}
    </Item>
  );
};

export default CatalogItem;

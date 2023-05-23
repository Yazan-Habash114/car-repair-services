import React from "react";
import styled from "styled-components";
import Image from "../../../UI/Image/Image";
import Info from "./Info/Info";

const Container = styled.div`
  background-color: ${(props) => props.theme.background};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 3rem;
`;
const GarageInfo = () => {
  return (
    <Container>
      <Image width="200px" src="/images/CatalogService/Maintenance.png" />
      <Info />
    </Container>
  );
};

export default GarageInfo;

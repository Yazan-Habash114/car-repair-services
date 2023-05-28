import React, { useContext } from "react";
import styled from "styled-components";
import Info from "./Info/Info";
import { Garage } from "../../../pages/GaragePage";
import GarageImage from "./GarageImage/GarageImage";
import { MediumScreen } from "../../../globals/responsive";

const Container = styled.div`
  background-color: ${(props) => props.theme.background};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  padding: 3rem;

  ${MediumScreen({ flexDirection: "column", alignItems: "center" })}
`;

const GarageInfo = () => {
  const garage = useContext(Garage);
  return (
    <Container>
      <GarageImage garage={garage} />
      <Info garage={garage} />
    </Container>
  );
};

export default GarageInfo;

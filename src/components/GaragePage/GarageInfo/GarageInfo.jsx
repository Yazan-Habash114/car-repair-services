import React, { useContext } from "react";
import styled from "styled-components";
import Info from "./Info/Info";
import { Garage } from "../../../pages/GaragePage";
import GarageImage from "./GarageImage/GarageImage";
import { MediumScreen } from "../../../globals/responsive";
import AlignedContainer from "../../UI/AlignedContainer/AlignedContainer";

const Container = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 3rem;
  margin-top: 250px;

  ${MediumScreen({ flexDirection: "column", alignItems: "center" })}
`;

const GarageInfo = () => {
  const garage = useContext(Garage);
  return (
    <AlignedContainer>
      <Container>
        <GarageImage garage={garage} />
        <Info garage={garage} />
      </Container>
    </AlignedContainer>
  );
};

export default GarageInfo;

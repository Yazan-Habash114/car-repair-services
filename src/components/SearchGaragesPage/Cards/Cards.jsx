import React from "react";
import styled from "styled-components";
import GarageCard from "./GarageCard/GarageCard";
import { MediumScreen } from "../../../globals/responsive";

const Container = styled.div`
  padding: 30px 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;

  ${MediumScreen({ flexDirection: "column", alignItems: "center" })}
`;

const Cards = ({ garages }) => {
  return (
    <Container>
      {garages.map((garage) => (
        <GarageCard garage={garage} />
      ))}
    </Container>
  );
};

export default Cards;

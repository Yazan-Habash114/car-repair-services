import React from "react";
import styled from "styled-components";
import GarageCard from "./GarageCard/GarageCard";
import { Mobile, Portrait } from "../../../globals/responsive";

const Container = styled.div`
  padding: 30px 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;

  ${Portrait({ justifyContent: "center" })}
  ${Mobile({ padding: 0 })}
`;

const Cards = ({ garages }) => {
  return (
    <Container>
      {garages.map((garage) => (
        <GarageCard garage={garage} key={garage.garageID} />
      ))}
    </Container>
  );
};

export default Cards;

import React from "react";
import styled, { useTheme } from "styled-components";
import TernaryHeading from "../../../UI/Headings/TernaryHeading";
import Sentence from "../../../UI/Sentence/Sentence";

const Container = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin: 0 1.2rem;
  padding: 1.2rem 0.8rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ServiceBooked = ({ service }) => {
  const { serviceName, serviceType, price, serviceTime, supportedGarageName } =
    service;

  const myTheme = useTheme();

  return (
    <Container>
      <TernaryHeading text={serviceName} theme={myTheme.secondary} />
      <Sentence text={serviceType} theme={myTheme.secondary} />
      <Sentence text={serviceTime} theme={myTheme.secondary} />
      <Sentence text={supportedGarageName} theme={myTheme.secondary} />
      <Sentence text={`$${price}`} theme={myTheme.secondary} />
    </Container>
  );
};

export default ServiceBooked;

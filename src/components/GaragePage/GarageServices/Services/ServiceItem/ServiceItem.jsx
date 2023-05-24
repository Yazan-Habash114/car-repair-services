import React from "react";
import styled, { useTheme } from "styled-components";
import TernaryHeading from "../../../../UI/Headings/TernaryHeading";
import Details from "./Details/Details";

const Container = styled.div`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};
  margin: 10px;
  display: flex;
  justify-content: center;
  padding: 10px 40px;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  flex-wrap: wrap;
`;

const ServiceItem = ({ service }) => {
  const myTheme = useTheme();

  return (
    <Container>
      <TernaryHeading text={service.serviceName} theme={myTheme.secondary} />
      <Details service={service} />
    </Container>
  );
};

export default ServiceItem;

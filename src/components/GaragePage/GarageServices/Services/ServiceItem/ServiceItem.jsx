import React from "react";
import styled, { useTheme } from "styled-components";
import TernaryHeading from "../../../../UI/Headings/TernaryHeading";
import Details from "./Details/Details";

const Container = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  color: ${(props) => props.theme.secondary};
  margin: 10px;
  display: flex;
  justify-content: center;
  padding: 1.8rem 3.2rem;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  flex-wrap: wrap;
  width: 400px;
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

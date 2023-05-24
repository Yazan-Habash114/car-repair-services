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
`;

const ServiceItem = () => {
  const myTheme = useTheme();
  return (
    <Container>
      <TernaryHeading text="Service 1" theme={myTheme.secondary} />
      <Details />
    </Container>
  );
};

export default ServiceItem;

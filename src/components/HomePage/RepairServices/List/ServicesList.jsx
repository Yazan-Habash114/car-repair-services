import React from "react";
import styled from "styled-components";
import ListItem from "./ListItem/ListItem";

const Container = styled.ul`
  padding: 0 0 0 1rem;
`;

const ServicesList = ({ data }) => {
  return (
    <Container>
      {data.map((row) => (
        <ListItem key={row} text={row} />
      ))}
    </Container>
  );
};

export default ServicesList;

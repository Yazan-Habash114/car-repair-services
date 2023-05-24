import React from "react";
import styled from "styled-components";
import QuarternHeading from "../../../../../UI/Headings/QuarternHeading";
import Sentence from "../../../../../UI/Sentence/Sentence";

const Container = styled.div`
  margin: 10px 0;
  padding: 10px 20px;
`;

const Row = styled.div`
  display: flex;
  margin: 10px 0;
`;

const Details = ({ service }) => {
  return (
    <Container>
      <Row>
        <QuarternHeading text="Service type:" />
        <Sentence text={service.serviceType} margin="0 0 0 5px" />
      </Row>
      <Row>
        <QuarternHeading text="Service time:" />
        <Sentence text={service.serviceTime} margin="0 0 0 5px" />
      </Row>
      <Row>
        <QuarternHeading text="Service price:" />
        <Sentence text={`$${service.price}`} margin="0 0 0 5px" />
      </Row>
      <Row>
        <QuarternHeading text="Description:" />
        <Sentence text={service.serviceDescription} margin="0 0 0 5px" />
      </Row>
    </Container>
  );
};

export default Details;

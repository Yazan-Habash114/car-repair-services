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

const Details = () => {
  return (
    <Container>
      <Row>
        <QuarternHeading text="Service type:" />
        <Sentence text="Maintenance" margin="0 0 0 5px" />
      </Row>
      <Row>
        <QuarternHeading text="Service time:" />
        <Sentence text="01:00:00" margin="0 0 0 5px" />
      </Row>
      <Row>
        <QuarternHeading text="Service price:" />
        <Sentence text="$50" margin="0 0 0 5px" />
      </Row>
      <Row>
        <QuarternHeading text="Description:" />
        <Sentence
          text="During regular inspections your regular technician will check your vehicle for signs of a problem with the cooling system components, such as the water pump, thermostat, and radiator, to prevent problems before they start."
          margin="0 0 0 5px"
        />
      </Row>
    </Container>
  );
};

export default Details;

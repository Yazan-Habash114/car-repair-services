import React from "react";
import styled, { useTheme } from "styled-components";
import SecondaryHeading from "../../../../UI/Headings/SecondaryHeading";
import QuarternHeading from "../../../../UI/Headings/QuarternHeading";
import Sentence from "../../../../UI/Sentence/Sentence";

const Container = styled.div`
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.background};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem 2rem;
`;

const Details = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.primary};
  padding: 10px 5px;
  color: ${(props) => props.theme.secondary};
  margin: 5px;
  text-align: center;
  border-radius: 5px;
`;

const Info = () => {
  const myTheme = useTheme();
  return (
    <Container>
      <SecondaryHeading
        text="UMT Garage"
        fontSize="32px"
        theme={myTheme.primary}
      />
      <Details>
        <Row>
          <QuarternHeading text="Garage Phone:" />
          <Sentence text="123456" />
        </Row>
        <Row>
          <QuarternHeading text="Garage Type:" />
          <Sentence text="Maintenance" />
        </Row>
        <Row>
          <QuarternHeading text="Car Type:" />
          <Sentence text="Mercedes" />
        </Row>
        <Row>
          <QuarternHeading text="Opening time:" />
          <Sentence text="8:00 - 16:00" />
        </Row>
      </Details>
    </Container>
  );
};

export default Info;

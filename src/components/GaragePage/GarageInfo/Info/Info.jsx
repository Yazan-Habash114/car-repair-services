import React from "react";
import styled, { useTheme } from "styled-components";
import SecondaryHeading from "../../../UI/Headings/SecondaryHeading";
import Sentence from "../../../UI/Sentence/Sentence";
import { MediumScreen, Landscape } from "../../../../globals/responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCar,
  faClock,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  border-left: 3px solid ${(props) => props.theme.primary};
  border-right: 3px solid ${(props) => props.theme.primary};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem 2rem;
  margin-top: 2.8rem;

  ${MediumScreen({ marginTop: "3.8rem" })}
`;

const Details = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${Landscape({ flexDirection: "column" })}
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 200px;
  flex-wrap: wrap;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 10px 5px;
  color: ${(props) => props.theme.secondary};
  margin: 5px;
  text-align: center;
  border-radius: 5px;

  ${Landscape({ width: "300px" })}
`;

const Info = ({ garage }) => {
  const myTheme = useTheme();

  return (
    <Container>
      <SecondaryHeading
        text={garage.garageName}
        fontSize="32px"
        theme={myTheme.secondary}
      />
      <Details>
        <Row>
          <FontAwesomeIcon icon={faPhone} />
          <Sentence text={garage.garagePhoneNumber} />
        </Row>
        <Row>
          <FontAwesomeIcon icon={faBriefcase} />
          <Sentence text={garage.availability ? "Open now" : "Closed"} />
        </Row>
        <Row>
          <FontAwesomeIcon icon={faCar} />
          <Sentence text={garage.carType} />
        </Row>
        <Row>
          <FontAwesomeIcon icon={faClock} />
          <Sentence
            text={`${garage.garageStartTime} - ${garage.garageEndTime}`}
          />
        </Row>
      </Details>
    </Container>
  );
};

export default Info;

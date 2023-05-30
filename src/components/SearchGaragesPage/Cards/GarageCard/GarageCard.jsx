import React from "react";
import styled, { useTheme } from "styled-components";
import QuarternHeading from "../../../UI/Headings/QuarternHeading";
import Sentence from "../../../UI/Sentence/Sentence";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faGlobe, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faClock, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import RegularButton from "../../../UI/Buttons/RegularButton";
import { useNavigate } from "react-router-dom";
import { MediumScreen } from "../../../../globals/responsive";

const Card = styled.div`
  background-color: ${(props) => props.theme.background};
  border-radius: 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  margin: 10px;
  padding: 10px 0;

  ${MediumScreen({ width: "600px" })}
`;

const CardImg = styled.div`
  width: 200px;
  height: 140px;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

const GarageCard = ({ garage }) => {
  const myTheme = useTheme();
  const navigate = useNavigate();

  return (
    <Card>
      <CardImg
        url={`http://localhost:8080/garages/${garage.garageID}/profileImage/1`}
      />
      <QuarternHeading
        text={garage.garageName}
        margin="40px 0 10px 0"
        fontSize="24px"
        theme={myTheme.primary}
      />
      <div>
        <Row>
          <FontAwesomeIcon icon={faPhone} />
          <Sentence text={garage.garagePhoneNumber} margin="0 20px" />
        </Row>
        <Row>
          <FontAwesomeIcon icon={faEnvelope} />
          <Sentence text={garage.garageEmail} margin="0 20px" />
        </Row>
        <Row>
          <FontAwesomeIcon icon={faGlobe} />
          <Sentence
            text={garage.availability ? "Open now" : "Closed"}
            margin="0 20px"
          />
        </Row>
        <Row>
          <FontAwesomeIcon icon={faCar} />
          <Sentence text={garage.carType} margin="0 20px" />
        </Row>
        <Row>
          <FontAwesomeIcon icon={faClock} />
          <Sentence text={garage.garageStartTime} margin="0 20px" />
        </Row>
        <Row>
          <FontAwesomeIcon icon={faClock} />
          <Sentence text={garage.garageEndTime} margin="0 20px" />
        </Row>
      </div>
      <RegularButton
        text="Visit Garage"
        onHover={myTheme.secondary}
        onClickHandler={() => navigate(`/garage/${garage.garageID}`)}
      />
    </Card>
  );
};

export default GarageCard;

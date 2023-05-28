import React from "react";
import styled, { useTheme } from "styled-components";
import Image from "../../../UI/Image/Image";
import Sentence from "../../../UI/Sentence/Sentence";
import QuarternHeading from "../../../UI/Headings/QuarternHeading";
import SpeechMark from "../SpeechMark/SpeechMark";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { Tablet } from "../../../../globals/responsive";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px 180px;
  background-color: ${(props) => props.theme.secondary};

  ${Tablet({ padding: "40px 100px" })}
`;

const AvatarSlide = ({ name, speech, img }) => {
  const myTheme = useTheme();
  return (
    <Container>
      <Image classType="circled-img" width="150px" height="150px" src={img} />
      <SpeechMark>
        <FontAwesomeIcon color={myTheme.default} icon={faQuoteLeft} />
      </SpeechMark>
      <Sentence text={speech} margin="10px 0" theme={myTheme.default} />
      <QuarternHeading text={name} theme={myTheme.primary} margin="2rem 0" />
    </Container>
  );
};

export default AvatarSlide;

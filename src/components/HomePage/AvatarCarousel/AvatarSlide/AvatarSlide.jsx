import React from "react";
import styled, { useTheme } from "styled-components";
import Image from "../../../UI/Image/Image";
import Sentence from "../../../UI/Sentence/Sentence";
import TernaryHeading from "../../../UI/Headings/TernaryHeading";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px 180px;
  background-color: ${(props) => props.theme.secondary};
`;

const AvatarSlide = ({ name, speech, img }) => {
  const myTheme = useTheme();
  return (
    <Container>
      <Image classType="circled-img" width="150px" height="150px" src={img} />
      <Sentence classStyle="paragraph-white" text={speech} />
      <TernaryHeading text={name} theme={myTheme.primary} />
    </Container>
  );
};

export default AvatarSlide;

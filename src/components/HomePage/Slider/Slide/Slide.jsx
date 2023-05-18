import React from "react";
import styled, { useTheme } from "styled-components";
import SecondaryHeading from "../../../UI/Headings/SecondaryHeading";
import EmphasizedHeading from "../../../UI/Headings/EmphasizedHeading";
import Sentence from "../../../UI/Sentence/Sentence";

const Container = styled.div`
  background-image: ${(props) => `url(${props.background})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 800px;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Slide = ({ background }) => {
  const theme = useTheme();
  return (
    <Container background={background}>
      <SecondaryHeading text="Trust Your Vehicle to" theme={theme.default} />
      <EmphasizedHeading text="Certified" theme={theme.primary} />
      <EmphasizedHeading text="Techniques" theme={theme.primary} />
      <Sentence
        classStyle="capitalized"
        text="Service, Maintenance & Repair by the certified service experts"
      />
    </Container>
  );
};

export default Slide;

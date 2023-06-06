import React from "react";
import styled, { useTheme } from "styled-components";
import Card from "../../../UI/Card/Card";
import TernaryHeading from "../../../UI/Headings/TernaryHeading";
import Sentence from "../../../UI/Sentence/Sentence";
import { Mobile, Landscape } from "../../../../globals/responsive";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 240px;
  padding: 30px 40px 10px 40px;
  text-align: center;
  height: 100%;
  border-radius: 5px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin: 0 auto;

  ${Landscape({ width: "100%" })}
  ${Mobile({ padding: "24px 12px 20% 12px", width: "90%" })}
`;

const GuaranteeService = ({ icon, title, explanation }) => {
  const myTheme = useTheme();

  return (
    <Card>
      <Container>
        {icon}
        <TernaryHeading text={title} margin="1.5rem 0 0.8rem 0" />
        <Sentence text={explanation} theme={myTheme.secondary} />
      </Container>
    </Card>
  );
};

export default GuaranteeService;

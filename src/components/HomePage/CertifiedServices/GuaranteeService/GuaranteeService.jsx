import React from "react";
import styled from "styled-components";
import Card from "../../../UI/Card/Card";
import TernaryHeading from "../../../UI/Headings/TernaryHeading";
import Sentence from "../../../UI/Sentence/Sentence";
import { Tablet } from "../../../../globals/responsive";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 240px;
  padding: 30px 40px 10px 40px;
  text-align: center;
  height: 100%;
  border-radius: 5px;
  box-shadow: 0 0 10px 1px ${(props) => props.theme.background};
  background-color: ${(props) => props.theme.background};

  ${Tablet({ width: "100%" })}
`;

const GuaranteeService = ({ icon, title, explanation }) => {
  return (
    <Card>
      <Container>
        {icon}
        <TernaryHeading text={title} margin="1.5rem 0 0.8rem 0" />
        <Sentence text={explanation} />
      </Container>
    </Card>
  );
};

export default GuaranteeService;

import React from "react";
import styled from "styled-components";
import Card from "../../../UI/Card/Card";
import SecondaryHeading from "../../../UI/Headings/SecondaryHeading";
import Sentence from "../../../UI/Sentence/Sentence";

const Container = styled.div`
  /* margin: 2rem 0; */
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
`;

const GuaranteeService = ({ icon, title, explanation }) => {
  return (
    <Card>
      <Container>
        {icon}
        <SecondaryHeading text={title} />
        <Sentence text={explanation} classStyle="paragraph" />
      </Container>
    </Card>
  );
};

export default GuaranteeService;

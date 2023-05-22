import React from "react";
import styled from "styled-components";
import { cards } from "./data.js";
import Card from "../../../UI/Card/Card.jsx";
import Image from "../../../UI/Image/Image.jsx";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

const Number = styled.h1`
  color: ${(props) => props.theme.primary};
  font-size: 256px;
  position: absolute;
  top: 0;
`;

const Steps = () => {
  return (
    <Container>
      {cards.map((card) => (
        <Card imgSrc={card.img} key={card.id}>
          <Number>{card.id}</Number>
          <Image src={card.img} />
        </Card>
      ))}
    </Container>
  );
};

export default Steps;

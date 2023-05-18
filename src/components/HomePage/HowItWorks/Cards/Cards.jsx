import React from "react";
import styled from "styled-components";
import { cards } from "./data.js";
import CardItem from "./CardItem/CardItem";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

const Cards = () => {
  return (
    <Container>
      {cards.map((card) => (
        <CardItem number={card.id} imgSrc={card.img} />
      ))}
    </Container>
  );
};

export default Cards;

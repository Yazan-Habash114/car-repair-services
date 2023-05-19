import React from "react";
import styled from "styled-components";
import CatalogItem from "./Item/CatalogItem";
import SecondaryHeading from "../../../UI/Headings/SecondaryHeading";
import Sentence from "../../../UI/Sentence/Sentence";

const Container = styled.div`
  margin-top: 3rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Catalog = () => {
  const cards = [
    {
      title1: "Preventative",
      title2: "Maintenance",
      p1: "The best way to minimize breakdown",
      p2: "doing routine maintenance",
      background: "#FFC513",
      color: "black",
    },
    {
      title1: "Brake",
      title2: "Repair & Service",
      p1: "",
      p2: "",
      background: "#2A2A2A",
      color: "#FFC513",
    },
    {
      title1: "Most Common",
      title2: "Repairs",
      p1: "We have over 30 common car repairs",
      p2: "and the list is growing",
      background: "#D9D9D9",
      color: "black",
    },
  ];

  const imagesSource = [
    "/images/CatalogService/BrakeRepair.png",
    "/images/CatalogService/CommonRepairs.png",
    "/images/CatalogService/Maintenance.png",
  ];
  return (
    <Container>
      {cards.map((card) => {
        return (
          <CatalogItem key={card.title1} background={card.background}>
            <SecondaryHeading text={card.title1} theme={card.color} />
            <SecondaryHeading text={card.title2} theme={card.color} />
            <Sentence classStyle="catalog-par" text={card.p1} />
            <Sentence classStyle="regular-text-black" text={card.p2} />
          </CatalogItem>
        );
      })}

      {imagesSource.map((src) => (
        <CatalogItem key={src} source={src} />
      ))}
    </Container>
  );
};

export default Catalog;

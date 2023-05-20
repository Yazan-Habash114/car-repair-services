import React from "react";
import styled from "styled-components";
import StatisticsItem from "./StatisticsItem/StatisticsItem";
import { statistics } from "./data.js";

const Container = styled.div`
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 15px;
`;

const Numbers = () => {
  return (
    <Container>
      {statistics.map(({ mainText, secondaryText }) => (
        <StatisticsItem mainText={mainText} secondaryText={secondaryText} />
      ))}
    </Container>
  );
};

export default Numbers;

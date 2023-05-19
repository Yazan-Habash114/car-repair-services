import React from "react";
import styled, { useTheme } from "styled-components";
import SecondaryHeading from "../../../../UI/Headings/SecondaryHeading";
import Sentence from "../../../../UI/Sentence/Sentence";

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 180px;
`;

const Separator = styled.div`
  margin: 0 1rem;
  width: 1rem;
`;

const StatisticsItem = ({ mainText, secondaryText }) => {
  const myTheme = useTheme();
  return (
    <Item>
      <SecondaryHeading text={mainText} theme={myTheme.primary} />
      <Separator />
      <Sentence text={secondaryText} />
    </Item>
  );
};

export default StatisticsItem;

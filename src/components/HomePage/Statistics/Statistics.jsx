import React from "react";
import AlignedContainer from "../../UI/AlignedContainer/AlignedContainer";
import styled from "styled-components";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";

const Container = styled.section`
  margin-top: 200px;
`;

const Contents = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Statistics = () => {
  return (
    <Container>
      <AlignedContainer>
        <Contents>
          <LeftSide />
          <RightSide />
        </Contents>
      </AlignedContainer>
    </Container>
  );
};

export default Statistics;

import React from "react";
import styled from "styled-components";
import Image from "../../../UI/Image/Image";

const Container = styled.div`
  width: 500px;
`;

const RightSide = () => {
  return (
    <Container>
      <Image src="/images/StatisticsSection/RightSideImage.png" width="100%" />
    </Container>
  );
};

export default RightSide;

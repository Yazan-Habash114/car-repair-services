import React from "react";
import styled from "styled-components";
import AlignedContainer from "../AlignedContainer/AlignedContainer";
import { Tablet } from "../../../globals/responsive";

const Background = styled.div`
  background-image: url(${(props) => props.backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 220px 0;

  ${Tablet({ backgroundAttachment: "local" })}
`;

const HeroBackground = ({ children, backgroundImg }) => {
  return (
    <Background backgroundImg={backgroundImg}>
      <AlignedContainer>{children}</AlignedContainer>
    </Background>
  );
};

export default HeroBackground;

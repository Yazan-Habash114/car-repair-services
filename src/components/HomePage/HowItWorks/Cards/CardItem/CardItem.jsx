import React from "react";
import styled from "styled-components";
import Image from "../../../../UI/Image/Image";

const Item = styled.div`
  position: relative;
  margin: 0 1rem;
`;

const Number = styled.h1`
  color: ${(props) => props.theme.primary};
  font-size: 256px;
  position: absolute;
  top: 0;
`;

const CardItem = ({ number, imgSrc }) => {
  return (
    <Item>
      <Number>{number}</Number>
      <Image src={imgSrc} />
    </Item>
  );
};

export default CardItem;

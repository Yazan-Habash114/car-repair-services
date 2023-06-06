import React from "react";
import styled from "styled-components";
import { Mobile } from "../../../globals/responsive";

const Heading = styled.h1`
  color: ${(props) => props.myStyle.theme};
  font-weight: ${(props) => props.myStyle.fontWeight || 600};
  margin: ${(props) => props.myStyle.margin || "0"};
  font-size: ${(props) => props.myStyle.fontSize};

  ${Mobile({ fontSize: "56px", lineHeight: "1.2" })}
`;

const MainHeading = ({ text, theme, fontWeight, fontSize, margin }) => {
  const myStyle = {
    theme: theme,
    fontWeight: fontWeight,
    fontSize: fontSize,
    margin: margin,
  };
  return <Heading myStyle={myStyle}>{text}</Heading>;
};

export default MainHeading;

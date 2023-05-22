import React from "react";
import styled from "styled-components";

const Paragraph = styled.p`
  color: ${(props) => props.myStyle.theme};
  font-weight: ${(props) => props.myStyle.fontWeight};
  margin: ${(props) => props.myStyle.margin || "0"};
  font-size: ${(props) => props.myStyle.fontSize || "16px"};
`;

const Sentence = ({ text, theme, fontWeight, fontSize, margin }) => {
  const myStyle = {
    theme: theme,
    fontWeight: fontWeight,
    fontSize: fontSize,
    margin: margin,
  };
  return <Paragraph myStyle={myStyle}>{text}</Paragraph>;
};

export default Sentence;

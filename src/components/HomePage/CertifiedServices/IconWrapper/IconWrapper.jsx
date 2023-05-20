import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: ${(props) => props.theme.primary};
  padding: 20px;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 150%;
  margin-bottom: 15px;
`;

const IconWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default IconWrapper;

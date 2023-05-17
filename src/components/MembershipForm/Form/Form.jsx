import React from "react";
import styled from "styled-components";

const FormContainer = styled.form`
  background-color: ${(props) => props.theme.background};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
  border-radius: 10px;
`;

const Form = ({ children }) => {
  return <FormContainer>{children}</FormContainer>;
};

export default Form;

import React from "react";
import styled from "styled-components";

const Input = styled.input`
  background: #eee;
  padding: 12px 15px;
  margin: 8px 15px;
  width: 100%;
  border-radius: 5px;
  border: none;
  outline: none;
`;

const FormInput = ({ type, placeholder }) => {
  return <Input type={type} placeholder={placeholder} required />;
};

export default FormInput;

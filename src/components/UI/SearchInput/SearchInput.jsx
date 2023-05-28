import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  border: 2px solid ${(props) => props.theme.secondary};
  padding: 8px 10px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  transition: 300ms;
  margin: 15px 0;

  &:focus-within {
    border: 2px solid ${(props) => props.theme.primary};
  }
`;

const Input = styled.input`
  background: transparent;
  outline: none;
  font-size: 16px;
  margin-left: 10px;
  border: none;
`;

const SearchInput = ({ placeholder, onWriteHandler }) => {
  return (
    <Container>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <Input type="text" placeholder={placeholder} onChange={onWriteHandler} />
    </Container>
  );
};

export default SearchInput;

import React from "react";
import styled, { useTheme } from "styled-components";
import SecondaryHeading from "../../UI/Headings/SecondaryHeading";
import Sentence from "../../UI/Sentence/Sentence";
import SearchInput from "../../UI/SearchInput/SearchInput";

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopSection = ({ onSearchChange }) => {
  const myTheme = useTheme();

  return (
    <Container>
      <SecondaryHeading
        text="Search Garages"
        fontSize="48px"
        theme={myTheme.secondary}
      />
      <Sentence
        text="You can search for a garage by name or by car type supported"
        fontSize="20px"
      />
      <SearchInput
        placeholder="Garage Name"
        onWriteHandler={(e) => onSearchChange(e)}
      />
    </Container>
  );
};

export default TopSection;

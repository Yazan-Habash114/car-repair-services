import React, { useState } from "react";
import styled from "styled-components";
import ServiceItem from "./ServiceItem/ServiceItem";
import SecondaryHeading from "../../../UI/Headings/SecondaryHeading";
import SearchInput from "../../../UI/SearchInput/SearchInput";

const Container = styled.div`
  background-color: ${(props) => props.theme.background};
  border-radius: 5px;
  padding: 10px 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`;

const Services = () => {
  const [searchByName, setSearchByName] = useState("");

  return (
    <Container>
      <SecondaryHeading text="Garage Services" />
      <SearchInput
        placeholder="Search for a service"
        onWriteHandler={(e) => setSearchByName(e.target.value)}
      />
      <Contents>
        <ServiceItem />
        <ServiceItem />
      </Contents>
    </Container>
  );
};

export default Services;

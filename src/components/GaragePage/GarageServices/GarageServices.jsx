import React, { useState } from "react";
import styled from "styled-components";
import AlignedContainer from "../../UI/AlignedContainer/AlignedContainer";
import Filters from "./Filters/Filters";
import Services from "./Services/Services";

const Container = styled.section`
  margin-top: 80px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
`;

const GarageServices = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  return (
    <Container>
      <AlignedContainer>
        <Content>
          <Filters
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
          <Services filters={selectedFilters} />
        </Content>
      </AlignedContainer>
    </Container>
  );
};

export default GarageServices;

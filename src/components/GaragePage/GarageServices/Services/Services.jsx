import React, { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import ServiceItem from "./ServiceItem/ServiceItem";
import SecondaryHeading from "../../../UI/Headings/SecondaryHeading";
import SearchInput from "../../../UI/SearchInput/SearchInput";
import { axiosInstance } from "../../../../globals/axiosInstance.js";
import Sentence from "../../../UI/Sentence/Sentence";
import { Garage } from "../../../../pages/GaragePage";

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

const Services = ({ filters }) => {
  const [garageServices, setGarageServices] = useState([]);
  const services = useRef([]);

  const garage = useContext(Garage);

  useEffect(() => {
    axiosInstance
      .get(`garages/${garage.garageID}/services`)
      .then((response) => {
        services.current = response.data;
        setGarageServices(response.data);
      });
  }, []);

  useEffect(() => {
    let servicesCopy = [...services.current];
    servicesCopy = servicesCopy.filter(({ serviceType }) =>
      filters.includes(serviceType)
    );
    filters.length == 0
      ? setGarageServices(services.current)
      : setGarageServices(servicesCopy);
  }, [filters]);

  const filterByName = (name) => {
    let servicesCopy = [...services.current];
    servicesCopy = servicesCopy.filter(({ serviceName }) =>
      serviceName.includes(name)
    );
    setGarageServices(servicesCopy);
  };

  return (
    <Container>
      <SecondaryHeading text="Garage Services" />
      <SearchInput
        placeholder="Search for a service"
        onWriteHandler={(e) => filterByName(e.target.value)}
      />
      <Contents>
        {garageServices.map((service) => (
          <ServiceItem key={service.serviceID} service={service} />
        ))}
        {garageServices.length == 0 && (
          <Sentence text="No services available" />
        )}
      </Contents>
    </Container>
  );
};

export default Services;

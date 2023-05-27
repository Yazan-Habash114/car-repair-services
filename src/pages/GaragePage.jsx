import React, { useEffect, useState, createContext } from "react";
import Header from "../components/UI/Header/Header";
import HeroBackground from "../components/UI/HeroBackground/HeroBackground";
import GarageInfo from "../components/GaragePage/GarageInfo/GarageInfo";
import GarageServices from "../components/GaragePage/GarageServices/GarageServices";
import { axiosInstance } from "../globals/axiosInstance";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/UI/Footer/Footer";

export const Garage = createContext();

const GaragePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [garage, setGarage] = useState(null);

  useEffect(() => {
    axiosInstance.get(`/garages/${id}`).then((response) => {
      if (!response.data) navigate("/notFound");
      else setGarage(response.data);
    });
  }, []);

  return (
    <Garage.Provider value={garage}>
      {garage && (
        <>
          <Header />
          <HeroBackground>
            <GarageInfo />
          </HeroBackground>
          <GarageServices />
          <Footer />
        </>
      )}
    </Garage.Provider>
  );
};

export default GaragePage;

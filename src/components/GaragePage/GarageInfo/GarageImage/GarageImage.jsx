import React from "react";
import Image from "../../../UI/Image/Image";

const GarageImage = ({ garage }) => {
  return (
    <Image
      width="200px"
      src={`http://localhost:8080/garages/${garage.garageID}/profileImage/1`}
    />
  );
};

export default GarageImage;

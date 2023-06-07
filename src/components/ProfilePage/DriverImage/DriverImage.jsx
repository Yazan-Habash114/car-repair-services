import React from "react";
import Image from "../../UI/Image/Image";

const DriverImage = ({ driverId }) => {
  return (
    <Image
      width="240px"
      height="240px"
      classType="circled-img-profile"
      src={`http://localhost:8080/users/${driverId}/profileImage/1`}
    />
  );
};

export default DriverImage;

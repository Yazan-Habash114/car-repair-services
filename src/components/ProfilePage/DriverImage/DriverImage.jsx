import React from "react";
import Image from "../../UI/Image/Image";

const DriverImage = ({ driverId }) => {
  return (
    <Image
      width="200px"
      src={`http://localhost:8080/users/${driverId}/profileImage/1`}
    />
  );
};

export default DriverImage;

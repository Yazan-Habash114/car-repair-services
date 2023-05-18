import React from "react";

const Image = ({ width, height, src }) => {
  return <img src={src} height={height} width={width} />;
};

export default Image;

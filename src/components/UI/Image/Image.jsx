import React from "react";
import styles from "./styles.module.css";

const Image = ({ width, height, src, classType }) => {
  return (
    <img
      className={styles[classType]}
      src={src}
      height={height}
      width={width}
    />
  );
};

export default Image;

import React from "react";
import styles from "../../styles.module.css";

const SectionOverlay = ({ children, overlayClass }) => {
  return <section className={styles[overlayClass]}>{children}</section>;
};

export default SectionOverlay;

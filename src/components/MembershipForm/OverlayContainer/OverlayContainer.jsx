import React from "react";
import styles from "../styles.module.css";
import OverlayButton from "../Buttons/OverlayButton";
import SectionOverlay from "./SectionOverlay/SectionOverlay";
import MainHeading from "../Headings/MainHeading";

const OverlayContainer = ({ onChildClick }) => {
  return (
    <div className={styles["overlay-container"]}>
      <div className={styles.overlay}>
        <SectionOverlay overlayClass="overlay-left">
          <MainHeading>Welcome Back!</MainHeading>
          <p>To keep connected with us please login with your personal info</p>
          <OverlayButton clickHandler={onChildClick}>Sign in</OverlayButton>
        </SectionOverlay>
        <SectionOverlay overlayClass="overlay-right">
          <MainHeading>Hello, friend </MainHeading>
          <p>Enter your personal details and start journey with us</p>
          <OverlayButton clickHandler={onChildClick}>Sign up</OverlayButton>
        </SectionOverlay>
      </div>
    </div>
  );
};

export default OverlayContainer;

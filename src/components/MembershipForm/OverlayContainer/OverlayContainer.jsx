import React from "react";
import styles from "../styles.module.css";
import OverlayButton from "../../UI/Buttons/OverlayButton";
import SectionOverlay from "./SectionOverlay/SectionOverlay";
import SecondaryHeading from "../../UI/Headings/SecondaryHeading";

const OverlayContainer = ({ onChildClick }) => {
  return (
    <div className={styles["overlay-container"]}>
      <div className={styles.overlay}>
        <SectionOverlay overlayClass="overlay-left">
          <SecondaryHeading>Welcome Back!</SecondaryHeading>
          <p>To keep connected with us please login with your personal info</p>
          <OverlayButton clickHandler={onChildClick}>Sign in</OverlayButton>
        </SectionOverlay>
        <SectionOverlay overlayClass="overlay-right">
          <SecondaryHeading>Hello, friend </SecondaryHeading>
          <p>Enter your personal details and start journey with us</p>
          <OverlayButton clickHandler={onChildClick}>Sign up</OverlayButton>
        </SectionOverlay>
      </div>
    </div>
  );
};

export default OverlayContainer;

import React from "react";
import styles from "../styles.module.css";
import SubmitButton from "../../UI/Buttons/SubmitButton";
import FormInput from "../Input/FormInput";
import Form from "../Form/Form";
import SecondaryHeading from "../../UI/Headings/SecondaryHeading";

const SignUpForm = () => {
  return (
    <div className={styles["sign-up"]}>
      <Form action="#">
        <SecondaryHeading text="Create Account" fontSize="32px" />
        <FormInput type="text" placeholder="Name" required />
        <FormInput type="email" placeholder="Email" required />
        <FormInput type="password" placeholder="Password" required />
        <FormInput type="text" placeholder="Phone Number" required />
        <SubmitButton text={"Sign up"} />
      </Form>
    </div>
  );
};

export default SignUpForm;

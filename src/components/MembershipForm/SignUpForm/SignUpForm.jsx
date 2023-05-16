import React from "react";
import styles from "../styles.module.css";
import SubmitButton from "../Buttons/SubmitButton";
import FormInput from "../Input/FormInput";
import Form from "../Form/Form";
import MainHeading from "../Headings/MainHeading";

const SignUpForm = () => {
  return (
    <div className={styles["sign-up"]}>
      <Form action="#">
        <MainHeading text="Create Account" />
        <FormInput type="email" placeholder="Email" required />
        <FormInput type="password" placeholder="Password" required />
        <SubmitButton text={"Sign up"} />
      </Form>
    </div>
  );
};

export default SignUpForm;

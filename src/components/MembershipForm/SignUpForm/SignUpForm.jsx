import React, { useReducer } from "react";
import styles from "../styles.module.css";
import SubmitButton from "../../UI/Buttons/SubmitButton";
import FormInput from "../Input/FormInput";
import Form from "../Form/Form";
import SecondaryHeading from "../../UI/Headings/SecondaryHeading";
import { signUpReducer } from "./signUpReducer";
import { axiosInstance } from "../../../globals/axiosInstance";
import cryptoJS from "crypto-js";
import { useCookies } from "react-cookie";

const SignUpForm = () => {
  const [cookies, setCookie] = useCookies(["token", "id"]);

  const initialStates = {
    name: "",
    email: "",
    password: "",
    phone: "",
  };

  const [data, dispatch] = useReducer(signUpReducer, initialStates);

  const handleChange = (e, type, inputName) => {
    dispatch({ type: type, [inputName]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const driver = [data.name, data.email, data.phone, data.password];
    const response = await axiosInstance.post(
      "/users/signup",
      JSON.stringify(driver),
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Accept: "application/json",
        },
      }
    );
    if (response.data == -1) setError(true);
    else {
      setCookie("id", response.data, { path: "/" });
      setCookie("token", cryptoJS.MD5(data.password).toString(), {
        path: "/",
      });
    }
  };

  return (
    <div className={styles["sign-up"]}>
      <Form action="#">
        <SecondaryHeading text="Create Account" fontSize="32px" />
        <FormInput
          type="text"
          placeholder="Name"
          required
          onChangeHandler={(e) => handleChange(e, "setName", "name")}
        />
        <FormInput
          type="email"
          placeholder="Email"
          required
          onChangeHandler={(e) => handleChange(e, "setEmail", "email")}
        />
        <FormInput
          type="password"
          placeholder="Password"
          required
          onChangeHandler={(e) => handleChange(e, "setPassword", "password")}
        />
        <FormInput
          type="text"
          placeholder="Phone Number"
          required
          onChangeHandler={(e) => handleChange(e, "setPhone", "phone")}
        />
        <SubmitButton
          text={"Sign up"}
          onClickHandler={(e) => handleSubmit(e)}
        />
      </Form>
    </div>
  );
};

export default SignUpForm;

import React, { useContext, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import {
  auth,
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth
} from "../../Utils/Firebase/firebase.util";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";

const SignUpForm = () => {
  const defaultFormField = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formField, setFormField] = useState(defaultFormField);
  const { name, email, password, confirmPassword } = formField;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };
  const resetFormFields = () => {
    setFormField(defaultFormField);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { name });
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
       // console.log('user creation encountered an error', error);
      }
    }
  };
  return (
    <div style={{width:"44%"}}>
      <h2>Don't Have An Account?</h2>
      <h3 style={{display: "flex",
      justifyContent: "center",
      border: "3px solid"}}>Sign Up with Email & Password</h3>
      <form onSubmit={handleSubmit}>
        <FormInput label ={"Name"}
          type="text"
          autoComplete="off"
          required
          onChange={handleChange}
          name="name"
          value={name}
        />

        <FormInput label={"Email"}
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput label={"Password"}
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput label ={"Confirm Password"}
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type={"submit"} buttonName = {"Sign Up"}/>
        
      </form>
    </div>
  );
};

export default SignUpForm;

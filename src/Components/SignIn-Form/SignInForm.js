import React, { useContext, useState } from "react";
import Button from "../Button/Button";
import "./SignInForm.styles.scss"
import FormInput from "../../Components/FormInput/FormInput";
import { signInWithGoogle,SignInAuthUserWithEmailAndPassword } from "../../Utils/Firebase/firebase.util";

const SignInForm = ({googleSignIn}) => {
  const defaultFormField = {
    email: "",
    password: "",
  };

  const [formField, setFormField] = useState(defaultFormField);
  const { email, password } = formField;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };
  const resetFormField=()=>{
    setFormField(defaultFormField)
  }
  const handleSubmit=async (event)=>{
    event.preventDefault();
    try{
      const response = await SignInAuthUserWithEmailAndPassword(email,password);
      resetFormField()
    }
    catch(error){
      if(error.code ==="auth/wrong-password")
      {
        alert("Wrong Password!")
      }
      if(error.code==="auth/user-not-found")
      {
        alert("User Not Found! Please Sign Up!")
      }
      console.log(error)
    }

  }

  return (
    <div className="sign-up-container ">
        <h2>Already Have An Account?</h2>
        <h3>Sign in with your Email & Password </h3>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Email"}
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label={"Password"}
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
        <Button buttonName={"Sign In"} type='submit' />
        <Button buttonName={"Google Sign In"} buttonType={"google"} type={"button"} onClick={signInWithGoogle}/>
        </div>
        
      </form>
    </div>
  );
};

export default SignInForm;

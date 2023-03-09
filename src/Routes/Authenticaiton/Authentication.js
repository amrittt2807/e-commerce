import "./Authentication.styles.scss"
import {signInWithGoogle,createUserDocumentFromAuth} from "../../Utils/Firebase/firebase.util";
import SignUpForm from "../../Components/SignUp-Form/SignUpForm";
import SignInForm from "../../Components/SignIn-Form/SignInForm";

const Authenticaiton = () => {
  

  const googleSignIn = async () => {
    const { user } = await signInWithGoogle();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className="authentication-container">
      <SignInForm googleSignIn={googleSignIn} />  
        <SignUpForm />
    </div>
  );
};
export default Authenticaiton;

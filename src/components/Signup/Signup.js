import React from "react";
import { useNavigate } from "react-router-dom";
import GoogleLogo from "../../Assets/Image/google.svg";
import FacebookLogo from "../../Assets/Image/Facebook.svg";
import GitHubLogo from "../../Assets/Image/Github.svg";
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from './../../firebase.init';
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () =>{
    signInWithPopup(auth, googleProvider)
    .then((result) =>{
      const user = result.user;
      navigate("/");
      toast.success("Welcome!!! Successfully Signed Up.")
      console.log(user);
    })
    .catch(error =>{
      toast.error("Opps!!! An error happend.")
      console.error(error);
    })
  }

  const handlefacebookSignIn = () =>{
    signInWithPopup(auth, facebookProvider)
    .then((result) =>{
      const user = result.user;
      navigate("/")
      toast.success("Welcome!!! Successfully Logged In with Facebook.")
      console.log(user);
    })
    .catch((error) =>{
      toast.error("Opps!!! An error happend.")
      console.error(error);
    })
  }

  const handleGitHubSignIn = () =>{
    signInWithPopup(auth, gitHubProvider)
    .then((result) =>{
      const user = result.user;
      navigate("/");
      toast.success("Welcome!!! Successfully Logged In with GitHub.")
      console.log(user);
    })
    .catch((error) =>{
      toast.error("Opps!!! An error happend.")
      console.error(error)
    })
  
  }
  return (
    <div className='auth-form-container '>
      <div className='auth-form'>
        <h1>Sign Up</h1>
        <form>
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <div className='input-wrapper'>
              <input type='email' name='email' id='email' />
            </div>
          </div>
          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <div className='input-wrapper'>
              <input type='password' name='password' id='password' />
            </div>
          </div>
          <div className='input-field'>
            <label htmlFor='confirm-password'>Confirm Password</label>
            <div className='input-wrapper'>
              <input
                type='password'
                name='confirmPassword'
                id='confirm-password'
              />
            </div>
          </div>
          <button type='submit' className='auth-form-submit'>
            Sign Up
          </button>
        </form>
        <p className='redirect'>
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
        <div className='horizontal-divider'>
          <div className='line-left' />
          <p>or</p>
          <div className='line-right' />
        </div>
        <div className="social-container">
          <div className='input-wrapper'>
            <button onClick={handleGoogleSignIn} className='google-auth'>
              <img src={GoogleLogo} alt='' />
              <p> Continue with Google </p>
            </button>
          </div>
          <div className='input-wrapper'>
            <button onClick={handlefacebookSignIn} className='google-auth'>
              <img src={FacebookLogo} alt='' />
              <p> Continue with Facebook </p>
            </button>
          </div>
          <div className='input-wrapper'>
            <button onClick={handleGitHubSignIn} className='google-auth'>
              <img src={GitHubLogo} alt='' />
              <p> Continue with GitHub </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

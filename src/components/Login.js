import React from "react";
import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData, userValidation } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(
      email?.current?.value,
      password?.current?.value,
      fullname?.current?.value,
      isSignInForm
    );

    setErrorMessage(message);

    if (message) return;

    // if (!isSignInForm) {
    //   setErrorMessage(message);
    // }
    // if (message && !isSignInForm) return;

    if (!isSignInForm) {
      //Sign Up Logic
      console.log("Sign Up Logic running");
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: fullname?.current?.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //Sign In Logic
      console.log("Sign In Logic running");

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
  };
  return (
    <div className="relative">
      <Header />
      <div className="w-[100vw] h-[100vh]">
        <img
          className="w-full h-full object-cover"
          src={BG_IMG}
          alt="backgroundImg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 max-sm:w-[75%] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] max-sm:translate-y-[-40%] text-white p-10 bg-black bg-opacity-75 rounded"
      >
        <h1 className="text-2xl font-bold py-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <>
            <input
              ref={fullname}
              className="p-4 my-3 w-full bg-gray-700 rounded"
              type="text"
              placeholder="Full Name"
            />
            <p className="text-xs">At least 5 characters long.</p>
          </>
        )}
        <>
          <input
            ref={email}
            className="p-4 my-3 w-full bg-gray-700 rounded"
            type="text"
            placeholder="Email Address"
          />
          <p className="text-xs">Eg. example@example.com</p>
        </>

        <>
          <input
            ref={password}
            className="p-4 my-3 w-full bg-gray-700 rounded"
            type="text"
            placeholder="Password"
          />
          <p className="text-xs">
            At least 8 characters, one uppercase letter, one lowercase letter,
            one special character and one number.
          </p>
        </>
        <button
          className="p-4 my-3 w-full bg-red-700 rounded"
          onClick={() => handleButtonClick()}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-red-500">{errorMessage}</p>
        <p className="cursor-pointer" onClick={() => toggleSignInForm()}>
          {isSignInForm
            ? "New to Netflix? Sign up form"
            : "Already registered, Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;

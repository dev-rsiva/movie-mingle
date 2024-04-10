import React from "react";
import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="relative">
      <Header />
      <div className="w-[100vw] h-[100vh]">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6cefb2f5-90be-4f57-adc4-f6c3c579273d/3943990c-f4e0-4147-82ad-f531e2b547f3/IN-en-20240401-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="backgroundImg"
        />
      </div>
      <form className="w-3/12 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white p-10 bg-black bg-opacity-75 rounded">
        <h1 className="text-2xl font-bold py-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            className="p-4 my-3 w-full bg-gray-700 rounded"
            type="text"
            value=""
            placeholder="Full Name"
          />
        )}
        <input
          className="p-4 my-3 w-full bg-gray-700 rounded"
          type="text"
          value=""
          placeholder="Email Address"
        />

        <input
          className="p-4 my-3 w-full bg-gray-700 rounded"
          type="text"
          value=""
          placeholder="Password"
        />
        <button className="p-4 my-3 w-full bg-red-700 rounded">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
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

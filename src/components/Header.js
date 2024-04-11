import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  console.log(user?.photoURL);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflixLogo"
      />
      {user && (
        <div className="flex items-center p-2">
          {/* <FontAwesomeIcon icon={faUser} className="text-xl" /> */}
          <img
            className="w-8 h-auto rounded-full mx-2"
            src={user?.photoURL}
            alt="userPhoto"
          />
          <button className="ml-2 font-bold" onClick={() => handleSignOut()}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

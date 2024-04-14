import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { SUPPORTED_LANGUAGES } from "../utils/languageConstants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleGPTSearchClick = () => {
    //Toggle GPT search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };
  useEffect(() => {
    //onAuthStateChanged is like a eventListener, so cleanup the function when this component unmounts.
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in,
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute max-sm:fixed w-full py-2 bg-gradient-to-b from-black max-sm:bg-black z-10 flex justify-between max-sm:flex-col max-sm:items-center">
      <img className="w-44 max-sm:text-center" src={LOGO} alt="netflixLogo" />
      {user && (
        <div className="flex items-center p-2">
          {/* <FontAwesomeIcon icon={faUser} className="text-xl" /> */}

          {showGptSearch && (
            <select
              className="bg-gray-900 px-2 py-1 text-white border-none mr-4 rounded"
              onChange={(e) => handleLanguageChange(e)}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option value={lang.identifier}>{lang.name}</option>
              ))}
            </select>
          )}
          <button
            className="bg-violet-800 px-3 py-1 rounded mr-4 text-slate-100"
            onClick={() => handleGPTSearchClick()}
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>
          <img
            className="w-8 h-auto rounded-full mx-2"
            src={user?.photoURL}
            alt="userPhoto"
          />
          <button
            className="ml-2 mr-2 font-bold text-white"
            onClick={() => handleSignOut()}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

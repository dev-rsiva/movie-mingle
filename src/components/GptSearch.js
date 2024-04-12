import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_IMG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="text-white">
      <div className="w-full h-full absolute -z-10">
        <img
          className="w-full h-full object-cover"
          src={BG_IMG}
          alt="backgroundImg"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;

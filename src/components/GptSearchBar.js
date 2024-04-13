import React from "react";
import lang from "../utils/languageConstants";
import useGptMovies from "../hooks/useGptMovies";

const GptSearchBar = () => {
  const { handleGptSearchClick, searchText, langKey } = useGptMovies();

  return (
    <div className="w-1/3 top-40 left-[50%] translate-x-[-50%] relative">
      <form
        className="bg-black p-2 flex justify-center items-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="w-full p-2 rounded border-2 focus:border-2 focus:border-yellow-500 focus:outline-none text-black"
          type="text"
          placeholder={lang?.[langKey]?.gptSearchPlaceholder}
        />
        <button
          className="bg-red-600 px-4 py-2 rounded ml-4 text-sm text-slate-100"
          onClick={() => handleGptSearchClick()}
        >
          {lang?.[langKey]?.search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;

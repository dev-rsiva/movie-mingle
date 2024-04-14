import React from "react";
import MovieCard from "./MovieCard";
import "../App.css";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 py-4">
      <h1 className="text-2xl font-bold px-3 py-2 text-white max-sm:text-lg">
        {title}
      </h1>
      <div className="flex overflow-x-scroll hide-scrollbar px-2 max-sm:justify-center">
        <div className="whitespace-nowrap flex">
          {movies?.map((movie) => (
            <MovieCard posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

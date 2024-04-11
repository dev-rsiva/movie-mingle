import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  console.log(posterPath);
  return (
    <div className="w-48 pr-4">
      <img alt="posterImg" src={IMG_CDN + posterPath} />
    </div>
  );
};

export default MovieCard;
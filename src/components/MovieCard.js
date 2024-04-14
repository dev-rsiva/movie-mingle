import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-48 max-sm:w-32 pr-4 max-sm:pr-2">
      <img alt="posterImg" src={IMG_CDN + posterPath} />
    </div>
  );
};

export default MovieCard;

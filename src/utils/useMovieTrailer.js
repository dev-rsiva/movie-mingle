import { useEffect } from "react";
import { API_OPTIONS, MAIN_MOVIE_VIDEO_API } from "./constants";
import { addTrailerMovie } from "./movieSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  //Fetching trailer video & updating the store with the trailer video data.
  const getMovieVideos = async () => {
    const data = await fetch(
      MAIN_MOVIE_VIDEO_API + movieId + "/videos",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json?.results?.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterData.length ? filterData[0] : json.results[0];
    // another way - Storing data of trailer key in local state variable instead of storing in redux store.
    // setTrailerId(trailer.key);
    dispatch(addTrailerMovie(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;

import { useSelector } from "react-redux";
import useMovieTrailer from "../utils/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  // Another way - Storing data of trailer key using local state variable instead of storing in redux store
  // const [trailerId, setTrailerId] = useState(null);
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  console.log(movieId);
  useMovieTrailer(movieId);
  return (
    <div className="w-full">
      <iframe
        className="w-full aspect-video"
        // another way - fetching the trailer key from state variable
        // src={`https://www.youtube.com/embed/${trailerId}?si=bvycXIxc7JYt9HTh`}
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // referrerpolicy="strict-origin-when-cross-origin"
        // allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;

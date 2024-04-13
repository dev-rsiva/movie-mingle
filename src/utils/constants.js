export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const BG_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/6cefb2f5-90be-4f57-adc4-f6c3c579273d/3943990c-f4e0-4147-82ad-f531e2b547f3/IN-en-20240401-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const USER_AVATAR =
  "https://avatars.githubusercontent.com/u/131841846?v=4";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const MAIN_MOVIE_VIDEO_API = "https://api.themoviedb.org/3/movie/";

export const IMG_CDN = "https://image.tmdb.org/t/p/w780/";

// const YOUTUBE_API_KEY = "AIzaSyBy4WUVwSIifzk6RuHX_Miahq0UZB59Jfo";

// export const YOUTUBE_VIDEO_API =
//   "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=contentDetails&part=statistics&id=videoId&key=" +
//   YOUTUBE_API_KEY;

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;

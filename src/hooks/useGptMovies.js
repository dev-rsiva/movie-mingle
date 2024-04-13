import { useState } from "react";
import { useDispatch } from "react-redux";
import { openai } from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { useSelector } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";
import { useRef, useEffect } from "react";

const useGptMovies = () => {
  const langKey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();
  const searchText = useRef("");
  const prevSearchText = useRef({ value: "" });
  const [searchClicked, setSearchClicked] = useState(false);

  const handleGptSearchClick = () => {
    setSearchClicked(true);
  };

  console.log(prevSearchText);
  console.log(searchText);
  useEffect(() => {
    if (
      searchClicked &&
      searchText.current.value !== prevSearchText.current.value
    ) {
      prevSearchText.current.value = searchText.current.value;
      fetchData(searchText.current.value);
    }
  }, [searchClicked, searchText.current.value]);

  const fetchData = async (searchQuery) => {
    if (searchQuery.trim() !== "") {
      // Make an API call to GPT API and get the movie Results
      const gptQuery =
        "Act as a movie recommendation FileSystemm and suggest some movies for the query : " +
        searchQuery +
        ". only give the names of five names, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

      const getResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });
      console.log(getResults.choices[0].message.content);

      if (!getResults.choices) {
        // TODO: Handle error
        return;
      }

      const gptMovies = getResults.choices[0].message.content.split(",");

      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray);
      console.log(tmdbResults);
      dispatch(
        addGptMovieResult({
          movieNames: gptMovies,
          movieResults: tmdbResults,
        })
      );
    }
    setSearchClicked(false);
  };

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    console.log(json);
    return json.results;
  };

  return { handleGptSearchClick, searchText, langKey };
};

export default useGptMovies;

import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
    //fetch data from TMDB API and update store

    const dispatch = useDispatch();

  const getTopRatedMovies = () => {

    fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",API_OPTIONS)
    .then(res => res.json())
    .then(json => {
        console.log("Browse Get",json);
        dispatch(addTopRatedMovies(json));
    })
    .catch(err => console.error('error:' + err));
      
  };

  useEffect(() => {
    getTopRatedMovies();

  }, [])

}

export default useTopRatedMovies;
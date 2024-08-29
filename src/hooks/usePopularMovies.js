import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/moviesSlice";



const usePopularMovies = () => {
    //fetch data from TMDB API and update store

    const dispatch = useDispatch();

  const getPopularMovies = async () => {

    fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",API_OPTIONS)
    .then(res => res.json())
    .then(json => {
        console.log("Browse Get",json);
        dispatch(addPopularMovies(json));
    })
    .catch(err => console.error('error:' + err));
      
  };

  useEffect(() => {
    getPopularMovies();

  }, [])

}

export default usePopularMovies;
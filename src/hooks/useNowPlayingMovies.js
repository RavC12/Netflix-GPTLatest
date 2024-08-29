import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/moviesSlice";


const useNowPlayingMovies = () => {
    //fetch data from TMDB API and update store

    const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {

    fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",API_OPTIONS)
    .then(res => res.json())
    .then(json => {
        console.log("Browse Get",json);
        dispatch(addNowPlayingMovies(json));
    })
    .catch(err => console.error('error:' + err));
      
  };

  useEffect(() => {
    getNowPlayingMovies();

  }, [])

}

export default useNowPlayingMovies;
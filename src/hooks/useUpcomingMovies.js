import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useUpcomingMovies =() => {

    const dispatch = useDispatch();

    const getUpcomingMovies = () => {
        fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", API_OPTIONS)
        .then(res=> res.json())
        .then(json => {
            console.log("Browse Get",json);
            dispatch(addUpcomingMovies(json));
        })
        .catch(err => console.error('error:' + err)); 
    }

    useEffect(() => {
        getUpcomingMovies();

    }, [])

}

export default useUpcomingMovies;
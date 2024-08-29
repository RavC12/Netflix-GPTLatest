import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"
import { addHorrorMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useHorrorMovies =() => {

    const dispatch = useDispatch();

    const getHorrorMovies = () => {
        fetch("https://api.themoviedb.org/3/list/27?language=en", API_OPTIONS)
        .then(res=> res.json())
        .then(json => {
            console.log("Browse Get",json);
            dispatch(addHorrorMovies(json));
        })
        .catch(err => console.error('error:' + err)); 
    }

    useEffect(() => {
        getHorrorMovies();

    }, [])

}

export default useHorrorMovies;
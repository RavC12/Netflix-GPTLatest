import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";


const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();

    // fetch trailer Video & updating the store with trailer video data
  const getMovieVideos = async () => {
    fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",
      API_OPTIONS
    )
      .then((res) => res.json())
      .then((json) => {
        console.log("Browse GetTrailer", json);
        const filterData = json.results.filter(
          (video) => video.type === "Trailer"
        );
        //as more then 1 trailer is there so used filterData and then took 0th value
        const trailer = filterData.length ? filterData[0] : json.results[0]; //if there is no trailer for movie
        console.log(trailer);
        dispatch(addTrailerVideo(trailer));
      })
      .catch((err) => console.error("error:" + err));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);

}

export default useMovieTrailer;
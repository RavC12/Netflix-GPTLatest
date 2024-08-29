import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  return(
    (movies.nowPlayingMovies && movies.topRatedMovies && movies.popularMovies && movies.upcomingMovies && movies.horrorMovies) ?
    <div className="bg-black">
      <div className="-mt-52 pl-12 relative z-20">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies.results}/>
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies.results}/>
      <MovieList title={"Popular"} movies={movies.popularMovies.results}/>
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies.results}/>
      <MovieList title={"Horror"} movies={movies.horrorMovies.items}/>
    </div>
    </div>
  : <div></div>)
}

export default SecondaryContainer;


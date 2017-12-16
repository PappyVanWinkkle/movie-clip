/* Actions for the movie application will be here */
/* The application uses React and Redux a store will be created later */
/* Application uses the Movie DB API to fetch data about Movies and Television series */
/* User calls the API by entering a search param eg Movie title=Sleeping with the Enemy */
/* Application uses axios to fetch data HTTP Client API key also exists */
import axios from "axios";
import {
  GET_POPULAR_MOVIES,
  GET_MOVIE,
  SEARCH_MOVIES,
  GET_TOP_RATED,
  GET_MOVIE_REVIEWS,
  GET_MOVIE_TRAILER,
  GET_NOW_PLAYING
} from "./types";
const API_KEY = `e7e1f7a94e74b43e3ad800f25580c833`;
const URL = `https://api.themoviedb.org/3`;
const Language = `en-US`;

// methods to calls the API for information
export function getPopularMovies() {
  const requests = axios.get(`${URL}/movie/popular`, {
    params: { api_key: API_KEY }
  });
  return dispatch => {
    requests.then(res => {
      dispatch({
        type: GET_POPULAR_MOVIES,
        payload: res.data.results
      });
    });
  };
}

// Retrieving a bunch of movies
export function getMovies(movie) {
  var request;
  if (movie) {
    request = axios.get(`${URL}/search/movie`, {
      params: { api_key: API_KEY, language: Language, query: movie }
    });
  } else {
    request = axios.get(`${URL}/movies/popular`, {
      params: { api_key: API_KEY }
    });
  }
  return dispatch => {
    request.then(res => {
      dispatch({
        type: SEARCH_MOVIES,
        payload: res.data.results
      });
    });
  };
}
// Get a single movie from the API
export function getMovie(id) {
  const request = axios.get(`${URL}/movie/${id}`, {
    params: { api_key: API_KEY, language: Language }
  });
  return dispatch => {
    request.then(res => {
      dispatch({
        type: GET_MOVIE,
        payload: res.data
      });
    });
  };
}
// Get Top Rated Movies
export function getTopRated() {
  const request = axios.get(`${URL}/movie/top_rated`, {
    params: { api_key: API_KEY, language: Language }
  });
  return dispatch => {
    request.then(res => {
      dispatch({
        type: GET_TOP_RATED,
        payload: res.data.results
      });
    });
  };
}
// Get Movie reviews. displays reviews
export function getMovieReviews(id) {
  const request = axios.get(`${URL}/movie/${id}/reviews`, {
    params: { api_key: API_KEY, language: Language }
  });
  return dispatch => {
    request.then(res => {
      dispatch({
        type: GET_MOVIE_REVIEWS,
        payload: res.data.results
      });
    });
  };
}
// Gets a bunch of movies that are showing in Movie Theatres
export function getMoviesPlaying() {
  const request = axios.get(`${URL}/movie/now_playing`, {
    params: { api_key: API_KEY, language: Language }
  });
  return dispatch => {
    request.then(res => {
      dispatch({
        type: GET_NOW_PLAYING,
        payload: res.data.results
      });
    });
  };
}
// Gets a video trailer of the movie in question
export function getMovieTrailer(id) {
  const request = axios.get(`${URL}/movie/${id}/videos`, {
    params: { api_key: API_KEY, language: Language }
  });
  return dispatch => {
    request.then(res => {
      dispatch({
        type: GET_MOVIE_TRAILER,
        payload: res.data.results
      });
    });
  };
}

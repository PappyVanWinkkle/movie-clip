/*
* Action creators will be located in here
* Movie DB API will be called in the file 
* with API_KEY eg 12345555 
*/
import axios from "axios";
import { GET_POPULAR_FILMS } from "./actions";
import { GET_POPULAR_TV } from "./actions";
import { GET_TV } from "./actions";
import { SEARCH_MOVIES } from "./actions";
import { GET_MOVIE_TRAILER } from "./actions";
import { GET_MOVIE } from "./actions";
const API_KEY = "e7e1f7a94e74b43e3ad800f25580c833";
const baseURL = `https://api.themoviedb.org/3`;
const language = "en-US";
// Gets the most popular Movies
export function getPopularFilms() {
  const request = axios.get(`${baseURL}/movie/popular`, {
    params: { api_key: API_KEY }
  });

  return dispatch => {
    request.then(res => {
      dispatch({
        type: GET_POPULAR_FILMS,
        payload: res.data.results
      });
    });
  };
}
// Get TV programs that are the most popular
export function getPopularTv() {
  const request = axios.get(`${baseURL}/tv/popular`, {
    params: { api_key: API_KEY }
  });
  return dispatch => {
    request.then(res => {
      dispatch({
        type: GET_POPULAR_TV,
        payload: res.data.results
      });
    });
  };
}
// Search movies Action creator gets the movies the user is looking for
export function searchMovies(term) {
  var request;
  if (term) {
    request = axios.get(`${baseURL}/search/movie`, {
      params: { api_key: API_KEY, language: language, query: term }
    });
  } else {
    request = axios.get(`${baseURL}/movie/popular`, {
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
// Gets the Movie with details including description and poster Action Creator
export function fetchMovieActionCreator(id) {
  const request = axios.get(`${baseURL}/movie/${id}`, {
    params: { api_key: API_KEY }
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
// Gets a particular TV programme with more details
export function fetchTVActionCreator(id) {
  const request = axios.get(`${baseURL}/tv/${id}`, {
    params: { api_key: API_KEY }
  });
  return dispatch => {
    request.then(res => {
      dispatch({
        type: GET_TV,
        payload: res.data
      });
    });
  };
}
// Gets the trailer for a specific Movie
export function fetchMovieTrailerActionCreator(id) {
  const request = axios.get(`${baseURL}/movie/${id}/videos`, {
    params: { api_key: API_KEY }
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

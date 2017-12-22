/*
* Action creators will be located in here
* Movie DB API will be called in the file 
* with API_KEY eg 12345555 
*/
import axios from "axios";
import { GET_POPULAR_FILMS } from "./actions";
import { GET_POPULAR_TV } from "./actions";
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

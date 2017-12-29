/*
* Reducers are combined here using the comine-Reducer from redux
*/
import { combineReducers } from "redux";
import Movies from "./movies";
import tvs from './tvPopular';

const reducers = combineReducers({
  movies: Movies,
  tvPopular: tvs
});

export default reducers;

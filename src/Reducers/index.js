/*
* Reducers are combined here using the comine-Reducer from redux
*/
import { combineReducers } from "redux";
import Movies from "./movies";
import Showing from './moviesShowing';

const reducers = combineReducers({
  movies: Movies,
  moviesShowing: Showing
});

export default reducers;

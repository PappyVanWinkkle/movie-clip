/*
* Reducers are combined here using the comine-Reducer from redux
*/
import { combineReducers } from "redux";
import Movies from "./movies";
import tvs from "./tvPopular";
import tvdetail from "./tvDetails";
import MovieDetail from "./movieDetail";

const reducers = combineReducers({
  movies: Movies,
  tvPopular: tvs,
  movieDetail: MovieDetail,
  tvDetails: tvdetail
});

export default reducers;

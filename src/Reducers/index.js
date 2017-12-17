/* Reducers are combined in this file
*  Into one single Object that can be used in our Application 
*  We import the Combine Reducers from Redux which combines our reducers 
*  Reducers are imported from Reducers to be combined here 
*/
import { combineReducers } from "redux";
import MovieDetail from "./movieDetail";
import MovieList from "./movieList";

// combining the reducers
const reducers = combineReducers({
  movieDetail: MovieDetail,
  movieList: MovieList
});

export default reducers;

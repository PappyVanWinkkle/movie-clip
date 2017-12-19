/* Reducers for single entity Movie
*  Creates an Initial state = [] for the application does not mutate it 
*  Imports Action Creators from Actions  ie GET_MOVIE
*/
import {
  GET_MOVIE,
  GET_MOVIE_REVIEWS,
  GET_MOVIE_TRAILER
} from "../Actions/types";
// setting up the initial state
const initialState = { reviews: [], trailers: [], movie: null };
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIE_REVIEWS: {
      return { ...state, reviews: action.payload };
    }
    case GET_MOVIE_TRAILER: {
      return { ...state, trailers: action.payload };
    }
    case GET_MOVIE: {
      return { ...state, movie: action.payload };
      
    }
    default:
      return state;
  }
}

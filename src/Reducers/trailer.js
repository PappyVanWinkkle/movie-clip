/*
* Reducer for Trailer Movies and TV shows 
*/
import { GET_MOVIE_TRAILER } from "../Actions/actions";
import { GET_TV_TRAILER } from "../Actions/actions";
// setting the initial state
const initialState = {
  trailers: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIE_TRAILER:
      return {
        ...state,
        trailers: action.payload
      };
    case GET_TV_TRAILER:
    return {
        ...state,
        trailers: action.payload
    }  
    default:
      return state;
  }
}

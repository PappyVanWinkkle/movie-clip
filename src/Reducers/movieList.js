/* Movie List Reducers will be contained here 
*  This contains all the reducer functions. Initial 
*  Initial State [] to be declared in this file for the rest of the application
*  Actions will be imported to change the state of the application
*/

import {
  GET_POPULAR_MOVIES,
  SEARCH_MOVIES,
  GET_TOP_RATED,
  GET_NOW_PLAYING
} from "../Actions/types";

// declare the original state of the application
const initialState = { list: [] };
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_POPULAR_MOVIES: {
      return { ...state, list: action.payload };
    }
    case SEARCH_MOVIES: {
      return { ...state, list: action.payload };
    }
    case GET_TOP_RATED: {
      return { ...state, list: action.payload };
    }
    case GET_NOW_PLAYING: {
      return { ...state, list: action.payload };
    }
    default:
      return state;
  }
}

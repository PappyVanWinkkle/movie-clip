/*
* Reducer for the Movie Application 
* Reducer will expect an Action and State returning a new
* state for the application 
* The file will also return actions searching for movies 
*/
import { GET_POPULAR_FILMS } from "../Actions/actions";
import { SEARCH_MOVIES } from "../Actions/actions";

// setting the Initial State for the App
const originalState = {
  list: [],
  movie: null
};

export default function(state = originalState, action) {
  switch (action.type) {
    case GET_POPULAR_FILMS:
      return {
        ...state,
        list: action.payload
      };
    case SEARCH_MOVIES:
      return {
        ...state,
        list: action.payload
      };
    
    default:
      return state;
  }
}

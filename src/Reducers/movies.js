/*
* Reducer for the Movie Application 
* Reducer will expect an Action and State returning a new
* state for the application 
*/
import { GET_POPULAR_FILMS } from "../Actions/actions";
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
    default:
      return state;
  }
}

/*
* Reducer for Movies showing in Cinemas at this point in time
* Imports Actions and has an Initial state to work with 
*/
import { GET_FILMS_SHOWING } from "../Actions/actions";
// Setting the Initial state for this component
const originalState = {
  list: [],
  movie: null
};

export default function(state = originalState, action) {
  switch (action.type) {
    case GET_FILMS_SHOWING:
      return {
        ...state,
        list: action.payload
      };
    default:
      return state;
  }
}

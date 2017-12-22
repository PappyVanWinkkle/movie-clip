/*
* Reducer for Movies showing in Cinemas at this point in time
* Imports Actions and has an Initial state to work with 
*/
import { GET_POPULAR_TV } from "../Actions/actions";
// Setting the Initial state for this component
const originalState = {
  list: [],
  tv: null
};

export default function(state = originalState, action) {
  switch (action.type) {
    case GET_POPULAR_TV:
      return {
        ...state,
        list: action.payload
      };
    default:
      return state;
  }
}

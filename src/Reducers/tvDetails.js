/*
* Reducer for the TV details showing a TV Show in 
* more detail. Action creators will be dispatched 
* and will modify the state accordingly 
*/

import { GET_TV } from "../Actions/actions";
// setting the initial state
const initialState = {
  tv: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TV:
      return {
        ...state,
        tv: action.payload
      };
    default:
      return state;
  }
}

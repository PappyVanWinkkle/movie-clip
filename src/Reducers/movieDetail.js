/*
* Reducer for Movie Details showing a Movie in detail
* Action creators will change the state 
*/

import { GET_MOVIE } from "../Actions/actions";
// setting the inital State
const initialState = {
  movie: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIE:
      return {
        ...state,
        movie: state.all[action.index - 1]
      };
    default:
      return state;
  }
}

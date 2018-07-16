/* ===================
  Reducer for New Movies
======================= */

import { GET_UPCOMING } from '../actions/types';

const initialState = {
	newMovies: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_UPCOMING:
			return {
				...state,
				newMovies: action.payload
			};
		default:
			return state;
	}
}

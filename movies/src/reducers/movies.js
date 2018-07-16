/* =========================
  Reducer to get the popular Movies
============================= */

import { GET_POPULAR_MOVIES } from '../actions/types';

const initialState = {
	movies: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_POPULAR_MOVIES:
			return {
				...state,
				movies: action.payload
			};
		default:
			return state;
	}
}

/* ====================
  REDUCER FOR ONE MOVIE
========================== */

import { GET_MOVIE_TRAILER } from '../actions/types';

const initialState = {
	movie: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_MOVIE_TRAILER:
			return {
				...state,
				movie: action.payload
			};
		default:
			return state;
	}
}

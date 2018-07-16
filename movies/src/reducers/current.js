/* =============================
  Reducer for current TV shows
=================================== */

import { GET_TV_SHOWING } from '../actions/types';

const initialState = {
	current: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_TV_SHOWING:
			return {
				...state,
				current: action.payload
			};
		default:
			return state;
	}
}

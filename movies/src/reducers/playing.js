/* =============================
  Reducer for Movies in Cinemas
=================================== */

import { GET_PLAYING } from '../actions/types';

const initialState = {
	playing: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_PLAYING:
			return {
				...state,
				playing: action.payload
			};
		default:
			return state;
	}
}

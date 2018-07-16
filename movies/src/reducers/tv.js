/* =========================
  Reducer to get the popular Movies
============================= */

import { GET_POPULAR_TV } from '../actions/types';

const initialState = {
	tvs: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_POPULAR_TV:
			return {
				...state,
				tvs: action.payload
			};

		default:
			return state;
	}
}

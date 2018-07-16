/* =============================
  Reducer for  top Movies
=================================== */

import { GET_TOP_RATED } from '../actions/types';

const initialState = {
	topRated: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_TOP_RATED:
			return {
				...state,
				topRated: action.payload
			};
		default:
			return state;
	}
}

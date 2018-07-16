/* ======================
  REDUCER FOR TV TRAILER
========================== */

import { GET_TV_TRAILER } from '../actions/types';

const initialState = {
	tvtrailer: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_TV_TRAILER:
			return {
				...state,
				tvtrailer: action.payload
			};
		default:
			return state;
	}
}

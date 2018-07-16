/* =======================
  ACTION FOR TV TRAILER
============================ */
import axios from 'axios';
import { GET_TV_TRAILER } from './types';

export default function getTvTrailer(id) {
	const api_key = `e7e1f7a94e74b43e3ad800f25580c833`;
	const params = `language=en-US&page=1`;
	return function(dispatch) {
		axios
			.get(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${api_key}&${params}`)
			.then((response) => {
				dispatch({
					type: GET_TV_TRAILER,
					payload: response.data.results
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
}

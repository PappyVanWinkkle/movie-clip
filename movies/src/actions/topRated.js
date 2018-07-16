/* =======================
  ACTION FOR TOP MOVIES
=========================== */

import axios from 'axios';
import { GET_TOP_RATED } from './types';

export default function getTopRatedMovies() {
	const api_key = `e7e1f7a94e74b43e3ad800f25580c833`;
	const params = `language=en-US&page=1`;
	return function(dispatch) {
		axios
			.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&${params}`)
			.then((response) => {
				dispatch({
					type: GET_TOP_RATED,
					payload: response.data.results
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
}

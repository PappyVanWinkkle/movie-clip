/* ====================
  ACTION FOR SINGLE MOVIE
======================== */

import axios from 'axios';
import { GET_MOVIE_TRAILER } from './types';

export default function getMovie(id) {
	const api_key = `e7e1f7a94e74b43e3ad800f25580c833`;
	const params = `language=en-US&page=1`;
	return function(dispatch) {
		axios
			.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}&${params}`)
			.then((response) => {
				dispatch({
					type: GET_MOVIE_TRAILER,
					payload: response.data.results
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
}

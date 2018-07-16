/* =======================
  ACTION FOR TOP NEW MOVIES
=========================== */

import axios from 'axios';
import { GET_UPCOMING } from './types';

export default function getNewMovies() {
	const api_key = `e7e1f7a94e74b43e3ad800f25580c833`;
	const params = `language=en-US&page=1`;
	return function(dispatch) {
		axios
			.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&${params}`)
			.then((response) => {
				dispatch({
					type: GET_UPCOMING,
					payload: response.data.results
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
}

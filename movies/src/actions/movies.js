/*
==========================
 POPULAR MOVIES ACTION
==========================
*/

import axios from 'axios';
import { GET_POPULAR_MOVIES } from './types';

export default function getPopularMovies() {
	const api_key = `e7e1f7a94e74b43e3ad800f25580c833`;
	const params = `language=en-US&page=1`;
	return function(dispatch) {
		axios
			.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&${params}`)
			.then((response) => {
				dispatch({
					type: GET_POPULAR_MOVIES,
					payload: response.data.results
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
}

/* =======================
  ACTION FOR MOVIES PLAYING
=========================== */

import axios from 'axios';
import { GET_PLAYING } from './types';

export default function playingMovies() {
	const api_key = `e7e1f7a94e74b43e3ad800f25580c833`;
	const params = `language=en-US&page=1`;
	return function(dispatch) {
		axios
			.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&${params}`)
			.then((response) => {
				dispatch({
					type: GET_PLAYING,
					payload: response.data.results
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
}

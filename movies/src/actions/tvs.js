/* =======================
  ACTION FOR POPULAR TV
=========================== */
import axios from 'axios';
import { GET_POPULAR_TV } from './types';

export default function getPopularTV() {
	const api_key = `e7e1f7a94e74b43e3ad800f25580c833`;
	const params = `language=en-US&page=1`;
	return function(dispatch) {
		axios
			.get(`https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&${params}`)
			.then((response) => {
				dispatch({
					type: GET_POPULAR_TV,
					payload: response.data.results
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
}

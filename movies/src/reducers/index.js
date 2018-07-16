// Combine Reducers here

import { combineReducers } from 'redux';
import movies from './movies';
import movie from './movie';
import tvs from './tv';
import topRated from './topMovies';
import newMovies from './upcomingMovie';
import playing from './playing';
import current from './current';
import tvtrailer from './tvtrailer';

export default combineReducers({
	movies: movies,
	tvs: tvs,
	current: current,
	topRated: topRated,
	newMovies: newMovies,
	playing: playing,
	movie: movie,
	tvtrailer: tvtrailer
});

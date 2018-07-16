import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import Error from './components/Error';
import Shows from './containers/shows';
import TopRated from './containers/topRated';
import TvTrailer from './containers/tvtrailer';
import Playing from './containers/playing';
import Movie from './containers/movie';
import NewMovies from './containers/newMovies';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div>
						<Switch>
							<Route exact path="/" component={Landing} />
							<Route exact path="/shows" component={Shows} />
							<Route exact path="/topMovies" component={TopRated} />
							<Route exact path="/new" component={NewMovies} />
							<Route exact path="/playing" component={Playing} />
							<Route exact path="/movie/:id" component={Movie} />
							<Route exact path="/tv/:id" component={TvTrailer} />
							<Route component={Error} />
						</Switch>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;

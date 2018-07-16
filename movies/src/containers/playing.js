/* =======================
   MOVIES PLAYING 
=========================== */
import React, { Component } from 'react';
import playingMovies from '../actions/playing';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { Link } from 'react-router-dom';
import getPopularTV from '../actions/tvs';
import getCurrentTV from '../actions/tvShowing';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Playing extends Component {
	componentWillMount() {
		this.props.playingMovies();
		this.props.getCurrentTV();
		this.props.getPopularTV();
	}
	render() {
		return (
			<div>
				<Nav />
				<div className="container-fluid" style={{ background: '#F4F4F4' }}>
					<div className="row" style={{ marginTop: '10rem' }}>
						<div className="col-sm-4">
							<h5 className="display-8 mt-4">Movies in Cinemas</h5>
							{this.props.playing.map(function(movie, key) {
								return (
									<div className="card" style={{ width: '18rem' }} key={key}>
										<img
											className="card-img-top"
											src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
											alt="poster for movie"
										/>
										<div className="card-body">
											<h5 className="card-title">{movie.title}</h5>
											<p className="card-text">{movie.overview}</p>
											<Link key={key} to={`/movie/${movie.id}`}>
												<button className="btn btn-outline-primary">Discover More</button>
											</Link>
										</div>
									</div>
								);
							})}
						</div>
						<div className="col-sm-4">
							<h5 className="display-8 mt-4" style={{ color: '#001C25' }}>
								Popular TV Shows
							</h5>
							{this.props.tvs.map(function(tv, key) {
								return (
									<div className="card" style={{ width: '18rem' }} key={key}>
										<img
											className="card-img-top"
											src={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`}
											alt="poster for movie"
										/>
										<div className="card-body">
											<h5 className="card-title">{tv.title}</h5>
											<p className="card-text">{tv.overview}</p>
											<Link key={key} to={`/tv/${tv.id}`}>
												<button className="btn btn-outline-primary">Discover More</button>
											</Link>
										</div>
									</div>
								);
							})}
						</div>
						<div className="col-sm-4">
							<h5 className="display-8 mt-4" style={{ color: '#001C25' }}>
								Current TV Shows
							</h5>
							{this.props.current.map(function(show, key) {
								return (
									<div className="card" style={{ width: '18rem' }} key={key}>
										<img
											className="card-img-top"
											src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`}
											alt="poster for movie"
										/>
										<div className="card-body">
											<h5 className="card-title">{show.title}</h5>
											<p className="card-text">{show.overview}</p>
											<Link key={key} to={`/tv/${show.id}`}>
												<button className="btn btn-outline-primary">Discover More</button>
											</Link>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

Playing.propTypes = {
	playing: PropTypes.array.isRequired,
	tvs: PropTypes.array.isRequired,
	current: PropTypes.array.isRequired,
	playingMovies: PropTypes.func.isRequired,
	getCurrentTV: PropTypes.func.isRequired,
	getPopularTV: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
	playing: state.playing.playing,
	tvs: state.tvs.tvs,
	current: state.current.current
});

export default connect(mapStateToProps, { playingMovies, getCurrentTV, getPopularTV })(Playing);

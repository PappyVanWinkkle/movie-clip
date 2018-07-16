/* =============
  CONTAINER FOR MOVIE
===================== */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import getMovie from '../actions/movie';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import PropTypes from 'prop-types';

class Movie extends Component {
	componentWillMount() {
		this.props.getMovie(this.props.match.params.id);
	}

	renderTrailer() {
		const video = this.props.movie.map(function(trailer, keys) {
			const { key } = trailer;
			const url = `https://www.youtube.com/embed/${key}`;
			return (
				<div className="container-fluid" style={{ overflowX: 'hidden' }} key={keys}>
					<div className="row">
						<div className="col-sm-4 col-lg-4 mx-auto" key={keys}>
							<iframe title="movie" width="500" height="350" src={url} frameBorder="0" allowFullScreen />
						</div>
					</div>
				</div>
			);
		});
		return <div className="videos">{video}</div>;
	}

	render() {
		return (
			<div>
				<Nav />
				<div className="container-fluid" style={{ background: '#F4F4F4' }}>
					<div className="row" style={{ marginTop: '10rem' }}>
						<div className="col-sm-10">
							<h5 style={{ fontWeight: '800', fontFamily: "'Audiowide', cursive" }}>Trailer for Movie</h5>
							{this.renderTrailer()}
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

Movie.propTypes = {
	getMovie: PropTypes.func.isRequired,
	movie: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
	movie: state.movie.movie
});

export default connect(mapStateToProps, { getMovie })(Movie);

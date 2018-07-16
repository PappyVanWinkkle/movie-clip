/* =============
  CONTAINER FOR TV TRAILER
===================== */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import PropTypes from 'prop-types';
import getTvTrailer from '../actions/tvtrailer';

class TvTrailer extends Component {
	componentWillMount() {
		this.props.getTvTrailer(this.props.match.params.id);
	}

	renderTrailer() {
		const video = this.props.tvtrailer.map(function(trailer, keys) {
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
							<h5 style={{ fontWeight: '800', fontFamily: "'Audiowide', cursive" }}>Trailer for TV</h5>
							{this.renderTrailer()}
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

TvTrailer.propTypes = {
	getTvTrailer: PropTypes.func.isRequired,
	tvtrailer: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
	tvtrailer: state.tvtrailer.tvtrailer
});

export default connect(mapStateToProps, { getTvTrailer })(TvTrailer);

/*
* Movie Detail Component to be rendered when 
* the user clicks on a specific movie displaying more details about film
*/
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMovieActionCreator } from "../Actions/actionCreators";
import { fetchMovieTrailerActionCreator } from '../Actions/actionCreators'

class MovieDetail extends React.Component {
  componentWillMount() {
    this.props.fetchMovie(this.props.match.params.id);
    this.props.fetchTrailer(this.props.match.params.id);
  }
  renderTrailer() {
    const { trailers } = this.props.trailer;
    const video = trailers.map((trailer, i) => {
       const {key} = trailer;
       const url = `https://www.youtube.com/embed/${key}`
       return (
           <div className="trailer" key={i}>
             <iframe src={url} frameBorder="0" allowFullScreen />
           </div>
       )
    })
    return (
        <div className="videos">
          {video}
        </div>
    )
  }

  render() {
    const { movie } = this.props;
    return (
      <div className="movie-detail">
        <h2>{movie.title}</h2>
        <h3>{movie.status}</h3>
        <h5>{movie.tagline}</h5>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={`poster for ${movie.title}`}
        />
        <p>{movie.overview}</p>
        {this.renderTrailer()}
      </div>
    );
  }
}

function mapStateToProps({ movieDetail, trailer }) {
  return {
    movie: movieDetail.movie,
    trailer
  };
}

export default connect(mapStateToProps, {
  fetchMovie: fetchMovieActionCreator,
  fetchTrailer: fetchMovieTrailerActionCreator
})(MovieDetail);

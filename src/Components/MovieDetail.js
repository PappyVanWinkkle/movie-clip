/*
* Movie Detail Component to be rendered when 
* the user clicks on a specific movie displaying more details about film
*/
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMovieActionCreator } from "../Actions/actionCreators";

class MovieDetail extends React.Component {
  componentWillMount() {
    this.props.fetchMovie(this.props.match.params.id);
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
      </div>
    );
  }
}

function mapStateToProps({ movieDetail }) {
  return {
    movie: movieDetail.movie
  };
}

export default connect(mapStateToProps, {
  fetchMovie: fetchMovieActionCreator
})(MovieDetail);

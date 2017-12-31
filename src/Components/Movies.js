/*
* Movies Component of the Movie Application 
* This Component will present to the user a UI with the most 
* Popular Movies from the MOVIE DB API
* UI does not display every detail of the Movies in Question
*/
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Search from "./Search";
import moment from "moment";
import { getPopularFilms } from "../Actions/actionCreators";

class Movies extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getPopularFilms();
  }

  renderMovie(movie, i) {
    const releaseDate = moment(movie.release_date).calendar();
    return (
      <Link key={i} to={`/movie/${movie.id}`}>
        <div className="movie-item">
          <h4 className="item-title">{movie.title}</h4>
          <p className="item-release-date">{releaseDate}</p>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`Poster for ${movie.title}`}/>
        </div>
      </Link>
    );
  }

  render() {
    var movies = this.props.movies.list.map(this.renderMovie);
    return (
      <div className="movies-list">
        <Search />
        {movies}
      </div>
    );
  }
}

function mapStateToProps({ movies }) {
  return {
    movies
  };
}

export default connect(mapStateToProps, { getPopularFilms })(Movies);

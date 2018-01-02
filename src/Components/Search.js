import React, { Component } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import "./Search.css";
import { connect } from "react-redux";
import { searchMovies } from "../Actions/actionCreators";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      sendMovieQuery: _.debounce(term => {
        this.props.searchMovies(term);
      }, 300)
    };
  }

  render() {
    return (
      // component state to handle input
      // every 0.3 seconds, will search for movies based on query value
      <nav className="navbar navbar-light bg-light justify-content-between">
        <Link to="/">
        <a className="navbar-brand">Movie-Clip</a>
        </Link>
        <form className="form-inline">
          <input
            className="form-control movie-search"
            value={this.state.term}
            placeholder="Search"
            onChange={event => this.onInputChange(event.target.value)}
          />
        </form>
      </nav>
    );
  }

  onInputChange(value) {
    this.setState({ term: value });
    this.state.sendMovieQuery(value);
  }
}

function mapStateToProps({ movies }) {
  return {
    query: movies.query
  };
}

export default connect(mapStateToProps, { searchMovies })(Search);

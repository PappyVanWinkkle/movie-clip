/*
* Search Movies component with input for user 
* Component will retrieve the state from actions 
*/
import React, { Component } from "react";
import { InputGroup, InputGroupAddon, Input } from "reactstrap";
import _ from "lodash";
import { connect } from "react-redux";
import { searchMovies } from "../Actions/actionCreators";

class SearchMovies extends React.Component {
  // constructor
  constructor(props) {
    super(props);
    this.state = {
      movie: "",
      sendMovie: _.debounce(movie => {
        this.props.searchMovies(movie);
      }, 300)
    };
  }

  render() {
    return (
      <div>
        
          <Input
            value={this.state.movie}
            onChange={event => this.onInputChange(event.target.value)}
          />
       
      </div>
    );
  }
  onInputChange(value) {
    this.setState({ movie: value });
    this.state.sendMovie(value);
  }
}
// Mapping state to props
function mapStateToProps({ searchMovie }) {
  return {
    query: searchMovie.query
  };
}

export default connect(mapStateToProps, { searchMovies })(SearchMovies);

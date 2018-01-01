/*
* TV show component to be rendered when the user 
* clicks on a specific moving displaying more info
*/
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchTVActionCreator } from "../Actions/actionCreators";

class TVDetail extends React.Component {
  componentWillMount() {
    this.props.fetchTV(this.props.match.params.id);
  }
  render() {
    const { tv } = this.props;
    return (
      <div className="tv-detail">
        <h2>{tv.name}</h2>
        <h4>Status: {tv.status}</h4>
        <img
          src={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`}
          alt={`poster for ${tv.name}`}
        />
        <h5>Number of Episodes {tv.number_of_episodes}</h5>
        <p>{tv.overview}</p>
      </div>
    );
  }
}
// maping state to props
function mapStateToProps({ tvDetails }) {
  return {
    tv: tvDetails.tv
  };
}

export default connect(mapStateToProps, {
  fetchTV: fetchTVActionCreator
})(TVDetail);

/*
* TV show component to be rendered when the user 
* clicks on a specific moving displaying more info
*/
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchTVActionCreator } from "../Actions/actionCreators";
import { fetchTVTrailerActionCreator } from "../Actions/actionCreators";

class TVDetail extends React.Component {
  componentWillMount() {
    this.props.fetchTV(this.props.match.params.id);
    this.props.fetchTrailerTV(this.props.match.params.id);
  }
  renderTVTrailer() {
      const { trailers } = this.props.trailer;
      const tvVideo = trailers.map((trailer, i) => {
          const {key} = trailer;
          const url = `https://youtube.com/embed/${key}`;
          return (
              <div className="trailer-tv">
                <iframe src={url} frameBorder="0" allowFullScreen />
              </div>
          )
      })
      return (
          <div className="videos">{tvVideo}</div>
      )
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
        <div>{this.renderTVTrailer()}</div>
      </div>
    );
  }
}
// maping state to props
function mapStateToProps({ tvDetails, trailer }) {
  return {
    tv: tvDetails.tv,
    trailer
  };
}

export default connect(mapStateToProps, {
  fetchTV: fetchTVActionCreator,
  fetchTrailerTV: fetchTVTrailerActionCreator
})(TVDetail);

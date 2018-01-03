/*
* TV show component to be rendered when the user 
* clicks on a specific moving displaying more info
*/
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./TVdetail.css";
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
      const { key } = trailer;
      const url = `https://youtube.com/embed/${key}`;
      return (
        <div className="trailer-tv" key={i}>
          <iframe
            width="500"
            height="350"
            src={url}
            frameBorder="0"
            allowFullScreen
          />
        </div>
      );
    });
    return <div className="videos">{tvVideo}</div>;
  }
  render() {
    const { tv } = this.props;
    return (
      <div className="container">
        <div className="row align-items-start">
          <div className="tv-detail col">
            <h3>{tv.name}</h3>
            <h5>Status: {tv.status}</h5>
            
            <img
              src={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`}
              alt={`poster for ${tv.name}`}
            />
            <h6>Number of Episodes {tv.number_of_episodes}</h6>
            <Link to="/tv">
            <button type="button" className="btn btn-outline-dark">Back</button>
            </Link>
          </div>
          <div className="col">
            <p className="overview">{tv.overview}</p>
          </div>
          <div>{this.renderTVTrailer()}</div>
        </div>
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

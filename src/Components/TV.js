/*
* Television Showing Component for the Film Application 
* The component will present to the user a UI
* With the most popular TV shows 
* UI does not display every detail of the TV show 
*/
import React, { Component } from "react";
import { connect } from "react-redux";
import "./Tv.css";
import { Link } from "react-router-dom";
import moment from "moment";
import { getPopularTv } from "../Actions/actionCreators";

class TV extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.getPopularTv();
  }
  renderTv(tv, i) {
    // format the date using moment.js library
    const airDate = moment(tv.first_air_date).calendar();
    return (
      <Link key={i} to={`/detail/${tv.id}`}>
      <div className="poster container">
        <div className="row">
        <div className="col-sm">
        <img src={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`} />
        </div>
        </div>
      </div>
      </Link>
    );
  }
  render() {
    var tvPopular = this.props.tvPopular.list.map(this.renderTv);
    return <div>{tvPopular}</div>;
  }
}

// Maping state to props
function mapStateToProps({ tvPopular }) {
  return {
    tvPopular
  };
}
// Exporting the component
export default connect(mapStateToProps, { getPopularTv })(TV);

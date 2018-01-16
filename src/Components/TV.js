/*
* Television Showing Component for the Film Application 
* The component will present to the user a UI
* With the most popular TV shows 
* UI does not display every detail of the TV show 
*/
import React from "react";
import { connect } from "react-redux";
import TVnavigation from "./TvNav";
import "./Tv.css";
import { Link } from "react-router-dom";
import { getPopularTv } from "../Actions/actionCreators";

class TV extends React.Component {
  
  componentWillMount() {
    this.props.getPopularTv();
  }
  renderTv(tv, i) {
  
    return (
      <Link key={i} to={`/detail/${tv.id}`}>
      <div className="main-container">
        <div className="row">
        <div className="col-sm">
        <img src={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`} alt={``} />
        </div>
        </div>
      </div>
      </Link>
    );
  }
  render() {
    var tvPopular = this.props.tvPopular.list.map(this.renderTv);
    return (
      <div className="tv-list">
        <TVnavigation />
      {tvPopular}
      </div>
    )
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

/*
* About us Page explaining more about the application
*/
import React from "react";
import "./About.css";
import Nav from "./TvNav"


const About = props => {
  return (
    <div className="About">
      <Nav />
      <h2>About Us</h2>
      <p className="lead">
        Movie-Clip is a small wondeful app where you can view trailers of your
        favourite Movies. You can also view some select TV Show Trailers on the
        TV Page. At this moment you can only search for whatever Movie you like
        but cannot search for TV shows. The folks at Movie-Clip are working very
        hard to implement a feature that searches for TV shows. Lastly we use
        the MOVIE DB API from our good friends from the said website to bring
        you all this wondeful content. Please enjoy using the app :)
      </p>
    </div>
  );
};

export default About;

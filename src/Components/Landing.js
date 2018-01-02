/* Landing Page for the Movie Application */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import TV from "./TV";
import Movies from "./Movies";

import "./Landing.css";

const Landing = props => {
  return (
    <div className="Landing">
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#Home"
          aria-controls="#Home"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <Link to="/">
        <a className="navbar-brand" href="#">
          Movie-Clip
        </a>
        </Link>

        <div className="collapse navbar-collapse" id="Home">
          <ul className="navbar-nav mr-auto mt-2 mt-md-0">
            <li className="nav-item active">
            <Link to="/">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
              </Link>
            </li>
            <li className="nav-item">
             <Link to="/movies">
              <a className="nav-link" href="#">
                Movies
              </a>
              </Link>
            </li>
            <li className="nav-item">
             <Link to="/tv">
              <a className="nav-link" href="#">
                TV
              </a>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Landing;

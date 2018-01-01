/* Landing Page for the Movie Application */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import TV from "./TV";
import Movies from "./Movies";
import { Jumbotron, Button, Container } from "reactstrap";
import "./Landing.css";

const Landing = props => {
  return (
    <div className="Landing">
      <Jumbotron>
        <h1 className="display-3">Movie-Clip</h1>
        <p className="lead">The Place for all your Movie desires</p>
        <hr className="my-2" />
        <p className="lead">
          <Link to="/movies" component={Movies}>
            <Button color="success" size="lg">
              Discover Film
            </Button>
          </Link>
        </p>
      </Jumbotron>
      <TV />
    </div>
  );
};

export default Landing;

/* Landing Page for the Movie Application */
import React, { Component } from "react";
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
          <Button color="success" size="lg">
            Discover Film
          </Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Landing;

/*
* Main Routing component for the Application
*/

import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import tvDetail from "./TVDetail";
import About from "./About";
import MovieDetail from "./MovieDetail";
import TV from "./TV";
import Error from "./404Page";
import Movies from "./Movies";

class HomeRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/movies" component={Movies} />
            <Route path="/tv" component={TV} />
            <Route path="/details/:id" component={MovieDetail} />
            <Route path="/detail/:id" component={tvDetail} />
            <Route path="/about" component={About} />
            <Route
                   component={Error}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default HomeRouter;

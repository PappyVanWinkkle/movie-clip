/*
* Main Routing component for the Application
*/

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Movies from './Movies'

class HomeRouter extends React.Component {
    render () {
        return (
           <BrowserRouter>
               <div className="container">
                 <Switch>
                     <Route exact path="/" component={Landing} />
                     <Route path="/movies" component={Movies} />
                     <Route render={function() {return <h3>Not Found</h3>}} />
                  </Switch>   
               </div>
           </BrowserRouter>
        )
    }
}

export default HomeRouter;
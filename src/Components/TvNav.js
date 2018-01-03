/*
* Simple Navigation for the TV component 
*/
import React from "react";
import { Link } from "react-router-dom";

const tvNav = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
         <Link to="/">
          <a className="navbar-brand" href="#">Movie-clip</a>
          </Link>
        </div>
      </nav>
    )
}

export default tvNav;

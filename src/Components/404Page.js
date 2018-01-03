/*
* Error page of the application 
*/

import React from "react";
import "./error.css";
import { Link } from "react-router-dom";

const errorPage = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="error col">
          <h1>404 Error</h1>
          <p className="col">
            Ooooooops, Looks like nothing was found on this page. Maybe try the
            link below for further assistance
          </p>
          <Link to="/">
            <button type="button" className="btn btn-outline-dark">
              Back to Safety
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default errorPage;

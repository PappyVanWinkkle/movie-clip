/* API request for the movie application to MOVIEDB */
import React, { Component } from "react";
import axios from "axios";

module.exports = {
  getMovies: function(movie) {
    const encodedURI = window.encodedURI(
      "https://api.themoviedb.org/3/movie/550?api_key=e7e1f7a94e74b43e3ad800f25580c833"
    );
    return axios.get(encodedURI).then(function(response) {
      return response.data.items;
    });
  }
};

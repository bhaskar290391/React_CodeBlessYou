import React from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MovieList from "./components/MovieList/MovieList";
import Fire from "./assets/fire.png";
import star from "./assets/glowing-star.png";
import partying from "./assets/partying-face.png";
const App = () => {
  return (
    <div className="app">
      <Navbar />

      <MovieList type="popular" title="Popular" emoji={Fire} />
      <MovieList type="top_rated" title="Top Rated" emoji={star} />
      <MovieList type="upcoming" title="Upcoming" emoji={partying} />
    </div>
  );
};

export default App;

import React from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MovieList from "./components/MovieList/MovieList";
import Fire from "./assets/fire.png";
import star from "./assets/glowing-star.png";
import partying from "./assets/partying-face.png";
import { Route, Routes } from "react-router-dom";
import SingleMovie from "./components/MovieList/SingleMovie";
const App = () => {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<MovieList type="popular" title="Popular" emoji={Fire} />}
        ></Route>

        <Route
          path="/top_rated"
          element={
            <MovieList type="top_rated" title="Top Rated" emoji={star} />
          }
        ></Route>

        <Route
          path="/upcoming"
          element={
            <MovieList type="upcoming" title="Upcoming" emoji={partying} />
          }
        ></Route>

        <Route path="/movie/:movieId" element={<SingleMovie />}></Route>
      </Routes>
    </div>
  );
};

export default App;

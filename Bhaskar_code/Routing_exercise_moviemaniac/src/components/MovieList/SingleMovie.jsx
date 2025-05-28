import React from "react";
import { useParams } from "react-router-dom";

const SingleMovie = () => {
  const { movieId } = useParams();
  return <h1>SingleMovie - {movieId}</h1>;
};

export default SingleMovie;

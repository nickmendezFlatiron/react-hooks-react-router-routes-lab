import React from "react";
import { directors } from "../data";

function Directors() {

  const directorsList = directors.map(director => {
    const {name , movies} = director
    const directorMovies = movies.map(movie => <li key={movie}>{movie}</li>)

    return (
      <div key={name}>
        <h3>{name}</h3>
        <p>Movies:</p>
        <ul>{directorMovies}</ul>
      </div>
    )
  })
  return <div>
          <h1>Directors Page</h1>
         {directorsList}
      </div>;
}

export default Directors;

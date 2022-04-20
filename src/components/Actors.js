import React from "react";
import { actors } from "../data";

function Actors() {

  const actorsList = actors.map(actor => {
    const {name , movies} = actor
    const actorMovies = movies.map(movie => <li key={name + movie}>{movie}</li>)

    return (
      <div key={name}>
        <h3>{name}</h3>
        <p>Movies:</p>
        <ul>{actorMovies}</ul>
      </div>
    )
  })
  
  return <div>
    <h1>Actors Page</h1>
     {actorsList
    }</div>;
}

export default Actors;

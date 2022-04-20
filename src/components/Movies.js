import React from "react";
import { movies } from "../data";

function Movies() {

  let moviesList = movies.map(movie =>{
    const {title , time , genres} = movie

    let genresList = genres.map(genre => { return <li key={genre}>{genre}</li>} )

    return (
      <div key={time}>
        <h3>{title}</h3>
        <p>{time}</p>
        <p>Genres:</p>
        <ul>{genresList}</ul>
      </div>
    )
  })
  return <div>
    <h1>Movies Page</h1>
    {moviesList}
    </div>;
}

export default Movies;

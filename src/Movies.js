import React from 'react'
import { useGlobalContext } from './Context'
import { NavLink } from 'react-router-dom';

const Movies = () => {

  const { movies , isLoading } = useGlobalContext();
    if (isLoading) {
    return(
      <div className='movie-setion'> 
        <div className='loading'>Loading...</div>
      </div>
    )
  }
  return (
    <>
      <section className='movie-page'>
      <div className='container grid grid-4-col'>
      {movies.map((currMovie)=>{
        const {imdbID,Title,Poster} =currMovie;
        const movieName = Title.substring(0,15);
        return (
          <NavLink to={`movie/${imdbID}`} key={imdbID}>
            <div className='card'>
              <div className='card-info'>
                <h2>{movieName.length>=15?`${movieName}...`:movieName}</h2>
                <img src={Poster} alt={imdbID}></img>
              </div>
            </div>
          </NavLink>
          
       
        )
      })}
      </div>
      </section>
    </>
  )
}

export default Movies
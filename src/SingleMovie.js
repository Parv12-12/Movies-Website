import { NavLink, useParams} from "react-router-dom";
import React, { useEffect, useState } from "react";
import { API } from "./Context";

const SingleMovie = () => {
  const { id } = useParams();

  const [isLoading,SetLoading] = useState(true);
  const [movies,SetMovie] = useState('');
   
 
     const getMovies = async(url)=>{
         SetLoading(true);
         try {
             const res = await fetch(url);
         const data = await res.json();
         console.log(data)
         if (data.Response === "True"){
         SetLoading(false);
         SetMovie(data);
        
         }
       
 
         } catch (error) {
             console.log(error);
             
             
         }
     }
 
     useEffect(()=>{
 
       let timerOut =   setTimeout(() => {
              getMovies(`${API}&i=${id}`);
             
         },800);
 
       return ()=>clearTimeout(timerOut)
 
        
 
     },[id])
       if (isLoading) {
    return(
      <div className='movie-setion'> 
        <div className='loading'>Loading...</div>
      </div>
    )
  }
  return (
    
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movies.Poster} alt="" />
        </figure>
        <div className="card-content">
          <p className="title">{movies.Title}</p>
          <p className=""></p>
          <p className="card-text">{movies.Released}</p>
          <p className="card-text">{movies.Genre}</p>
          <p className="card-text">{movies.imdbRating} / 10</p>
          <p className="card-text">{movies.Country}</p>
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
        </div>
      </div>
    </section>
    
  );
};

export default SingleMovie;
import React from 'react'
import './MovieCard.css'
import { Link } from "react-router-dom";

export default function MovieCard(props) {
  const { image: { medium: movieImg }, id } = props;
  return (
    <div className='movie-card'>
        <Link to={`/movie-details/${id}`}>
            <img src={movieImg} alt=''/>
        </Link>
    </div>
  )
}

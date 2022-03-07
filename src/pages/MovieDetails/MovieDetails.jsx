import React, { useEffect, useState } from 'react'
import axios from 'axios';
import parse from 'html-react-parser'
import {useParams} from "react-router-dom";
import './MovieDetails.css'
export default function MovieDetails() {
const [movie, setMovie] = useState(null);
let { id } = useParams();

useEffect(() => {
    fetchMovie();
})

const fetchMovie = async () => {
    const res = await axios.get(`https://api.tvmaze.com/shows/${id}`);
    setMovie(res.data);
}

const getMovieDetailsContent = () => (
    <div>
        <div className='movie-title'><h3>{movie.name}</h3></div>
        <div style={{ width: '100%', display: 'flex'}}>
                <div className='movie-section'>
                    <span>Rating: <b>{movie.rating.average}</b></span>
                    {parse(movie.summary)}
                </div>
                <div className='movie-section'>
                    <img src={movie.image.original} alt={movie.name}/>
                </div>
        </div>
    </div>
);

  return (
    <div>
        <h2>Movie Details</h2>
        {movie && getMovieDetailsContent()}
    </div>
  )
}

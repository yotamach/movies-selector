import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MovieCard from '../../components/MovieCard/MovieCard';
import './Home.css'

export default function Home() {
    const [movies,setMovies] = useState([])
    const [genres,setGenres] = useState([])

    const fetchAll = async () => {
        const res = await axios.get('https://api.tvmaze.com/shows');
        setMovies(res.data);
    }

    useEffect(() => {
        fetchAll();
    },[]);


    useEffect(() => {
        const genresList = movies.map((movie) => movie.genres);
        setGenres([...new Set(genresList.flat())].sort());
    },[movies]);

    const getTopTen = (genre) => {
        let topTen = [];
        if(genre) {
            topTen = movies.filter((movie) => movie.genres.includes(genre)).sort((a, b) => (a.rating.average < b.rating.average) ? 1 : -1).slice(0,10);
        }
        return <div key={genre} style={{ textAlign: 'left' }}>
        <h3>Top 10 {genre}</h3>
        <div className='ranking-container'>
            <div className='top-ten-list'>
                {topTen.map((movie) => <MovieCard key={movie.id} {...movie} />)}
            </div>
        </div>
        </div>;
    }

  return (
      <div style={{ textAlign: 'center' }}>
          <h2>TV shows library</h2>
          {genres && genres.map((genre) => getTopTen(genre))}
      </div>
  )
}

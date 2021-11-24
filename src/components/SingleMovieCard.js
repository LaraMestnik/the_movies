import React from 'react';
import { useHistory } from 'react-router-dom';

export default function SingleMovieCard({ movie }) {
    const history = useHistory();


    return (
        <div className='movie-card' onClick={() => history.push("/movie", { movie })}>
            <div className="movie-poster" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})` }}></div>
            <div className="movie-title">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </div>
    )
}

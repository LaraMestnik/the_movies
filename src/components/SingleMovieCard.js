import React from 'react'

export default function SingleMovieCard({ movie }) {
    return (
        <div className='movie-card'>
            <div className="movie-poster" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})` }}></div>
            <div className="movie-title">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </div>
    )
}

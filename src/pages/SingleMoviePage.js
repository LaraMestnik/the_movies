import { useState } from 'react';
import { useLocation } from "react-router-dom";

export default function SingleMoviePage() {
    const location = useLocation();
    const [movie, setMovie] = useState(location.state.movie);
    console.log(movie);

    return (
        <div className="movie-page">
            <div className="movie-page__content">

                <div style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})` }} className="movie-poster"></div>

                <div className="movie-info">
                    <h3>{movie.title}</h3>
                    <p className='release-year'>{movie.release_date.substring(0, 4)}</p>
                    <p>{movie.overview}</p>
                </div>
            </div>
        </div>
    )
}

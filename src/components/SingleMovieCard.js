import { useHistory } from 'react-router-dom';
import AddToWatchList from './AddToWatchList';
import { AuthContext } from '../context/AuthContext';
import { useCustomContext } from '../custom hooks/useCustomContext';

export default function SingleMovieCard({ movie }) {
    const history = useHistory();
    const { user } = useCustomContext(AuthContext);



    return (
        <div className='movie-card' >
            <div className="movie-card__poster"
                style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})` }}
                onClick={() => history.push("/movie", { movie })}></div>
            <div className="movie-card__title">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
            {user && <AddToWatchList movie={movie} />}
        </div>
    )
}

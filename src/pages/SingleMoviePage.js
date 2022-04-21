import { useLocation } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
import { useCustomContext } from '../custom hooks/useCustomContext';

//components
import Logo from '../components/Logo';
import AddToWatchList from '../components/AddToWatchList';

export default function SingleMoviePage() {
    const location = useLocation();
    const movie = location.state.movie;
    const { user } = useCustomContext(AuthContext);
    console.log(movie, user);

    return (
        <div className="movie-page">
            <section className="movie-page--up">
                <Logo className="logo--white" />
            </section>

            <section className="movie-page--down">
                <div className="movie-page__content">

                    <div style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})` }} className="movie-poster"></div>

                    <div className="movie-info">
                        <h3>{movie.title}</h3>
                        <p className='release-year'>{movie.release_date.substring(0, 4)}</p>
                        <p>{movie.overview}</p>
                        {user && <AddToWatchList movie={movie} />}
                    </div>
                </div>
            </section>
        </div>
    )
}

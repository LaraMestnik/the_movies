import { useLocation } from 'react-router-dom';
import SingleMovieCard from '../components/SingleMovieCard';
import Logo from '../components/Logo';

export default function SearchMovieResults() {
    const location = useLocation();
    const results = location?.state?.data?.results;

    console.log(location);


    return (
        <div className="search-movie-results">
            <section className="search-movie-results--up">
                <Logo className="logo--white" />
                <h3 className="search-movie-title">Search results for {location?.state?.searchTerm}... </h3>
            </section>
            <div className="search-movie-results__container">
                {results && results.map(result => <SingleMovieCard movie={result} key={result.id} />)}
            </div>
        </div>
    )
}

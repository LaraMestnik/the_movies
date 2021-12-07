import { useLocation } from 'react-router-dom';
import SingleMovieCard from '../components/SingleMovieCard';

export default function SearchMovieResults() {
    const location = useLocation();
    const results = location?.state?.data?.results;

    console.log(location);


    return (
        <div className="search-movie-results">
            <h3 className="search-movie-title">Search results for {location?.state?.searchTerm}... </h3>
            <div className="search-movie-results__container">
                {results && results.map(result => <SingleMovieCard movie={result} key={result.id} />)}
            </div>
        </div>
    )
}

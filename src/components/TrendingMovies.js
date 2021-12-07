import SingleMovieCard from '../components/SingleMovieCard';
import useFetch from '../custom hooks/useFetch';

export default function TrendingMovies() {
    const APIkey = process.env.REACT_APP_TMDB_API_KEY;
    const { data: movies, getData } = useFetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${APIkey}`);

    return (
        <>
            <h2 className='trending-movies-title'>Trending Today</h2>
            <section className="trending-movies">
                <div className="trending-movies__scroll">
                    {movies?.results.map(movie => <SingleMovieCard movie={movie} key={movie.id} />)}
                </div>
            </section>
        </>
    )
}

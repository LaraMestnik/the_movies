import { useEffect, useState } from 'react';
import { projectFirestore } from '../firebase';
import { useCustomContext } from '../custom hooks/useCustomContext';
import { MoviesContext } from '../context/MoviesContext';
import { AuthContext } from '../context/AuthContext';


//components
import SingleMovieCard from './SingleMovieCard';

const WatchList = () => {
    const [watchlist, setWatchList] = useState([]);
    const [loading, setLoading] = useState(false);

    const { dispatch, error } = useCustomContext(MoviesContext);
    const { user } = useCustomContext(AuthContext);

    useEffect(() => {
        setLoading(true);

        const collectionRef = projectFirestore.collection('watchlist').where("uid", "==", user.uid);

        const unsub = collectionRef.onSnapshot((snapshot) => {
            if (snapshot.empty) {
                dispatch({ type: 'ERROR', payload: 'There are no movies in your watchlist' });
                setLoading(false);
            } else {
                let movies = [];
                snapshot.docs.forEach(doc => {
                    movies.push({ docId: doc.id, ...doc.data() });
                });
                setWatchList(movies);
                setLoading(false);
            }

        }, error => {
            dispatch({ type: 'ERROR', payload: error.message });
            console.log(error);
            setLoading(false);
        });

        return () => unsub();

    }, [])

    return (
        <section className="watchlist">
            <h2 className="watchlist__title">Watchlist</h2>
            <p className="watchlist__error">{error}</p>
            <div className="watchlist__movies">
                {watchlist.length > 0 ?
                    watchlist.map(movie => <SingleMovieCard key={movie.id} movie={movie} />) : error}
            </div>
        </section>
    )
}

export default WatchList;

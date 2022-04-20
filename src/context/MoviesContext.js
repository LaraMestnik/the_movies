import { createContext, useReducer, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { projectFirestore } from '../firebase';

export const MoviesContext = createContext();

const initialState = {
    watchlist: [],
    error: ''
}

const moviesReducer = (state, action) => {
    switch (action.type) {
        case 'DB_WATCHLIST':
            return { ...state, watchlist: [...action.payload] }
        case 'ADD_TO_WATCHLIST':
            return { ...state, watchlist: [...state.watchlist, action.payload] }
        case 'ERROR':
            return { ...state, error: action.payload }
        default:
            return state
    }
}

const MoviesContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(moviesReducer, initialState);
    const history = useHistory();

    console.log('movie array', state);
    useEffect(() => {
        let dbwatchlist = [];
        projectFirestore.collection('watchlist').onSnapshot(snapshot => {
            snapshot.docs.forEach(doc => {
                dbwatchlist.push({ docId: doc.id, ...doc.data() });
            });
            dispatch({ type: 'DB_WATCHLIST', payload: dbwatchlist });
        });
    }, []);

    const addToWatchList = async (movie) => {

        const alreadyInWatchlist = state.watchlist.map(movie => {
            return movie.id;
        })

        if (alreadyInWatchlist.includes(movie.id)) {
            dispatch({ type: 'ERROR', payload: 'This movie is already in your watchlist' })
            history.push('/dashboard');
        } else {
            dispatch({ type: 'ADD_TO_WATCHLIST', payload: movie });

            try {
                await projectFirestore.collection('watchlist').add(movie);
                history.push('/dashboard');
            } catch (error) {
                console.log(error);
            }
        }


    }

    return (
        <MoviesContext.Provider value={{ ...state, dispatch, addToWatchList }}>
            {children}
        </MoviesContext.Provider>
    )
}

export default MoviesContextProvider;

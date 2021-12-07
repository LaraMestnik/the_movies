import { useState } from 'react';
import useFetch from '../custom hooks/useFetch';
import { useHistory } from 'react-router-dom';

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const APIkey = process.env.REACT_APP_TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${APIkey}&language=en-US&query=${searchTerm}&page=1&include_adult=false`;
    const { data } = useFetch(url);
    const history = useHistory();

    function handleSUbmit(e) {
        e.preventDefault();

        history.push("/movieresults", { data, searchTerm });

    }

    return (
        <form className="search-bar" onSubmit={handleSUbmit}>
            <input type="text" placeholder="Search for movies..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </form>
    )
}

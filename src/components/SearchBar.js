import { useState } from 'react';
import useFetch from '../custom hooks/useFetch';
import { useHistory } from 'react-router-dom';

const APIkey = process.env.REACT_APP_TMDB_API_KEY;

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    let url = '';
    if (searchTerm) {
        url = `https://api.themoviedb.org/3/search/movie?api_key=${APIkey}&language=en-US&query=${searchTerm}&page=1&include_adult=false`;
    }
    const history = useHistory();
    const { data } = useFetch(url);

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

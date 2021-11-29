import { useState } from 'react';

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');

    function handleSUbmit(e) {
        e.preventDefault();

        console.log(searchTerm);

    }

    return (
        <form className="search-bar" onSubmit={handleSUbmit}>
            <input type="text" placeholder="Search for movies..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </form>
    )
}

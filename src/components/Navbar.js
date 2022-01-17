import React from 'react';
import Button from './Button.js';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar.js';

export default function Navbar() {
    return (
        <nav id="nav">
            <div id="logo">
                <h1>the movies</h1>
            </div>
            <SearchBar />
            <div className="btn-container">
                <Link to="/login"><Button className="btn-secondary btn-small">Log In</Button></Link>
            </div>
        </nav>
    )
}

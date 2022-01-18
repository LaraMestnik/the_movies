import React from 'react';
import Button from './Button.js';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar.js';
import Logo from '../components/Logo';

export default function Navbar() {
    return (
        <nav id="nav">
            <Logo className="logo--white" />
            <SearchBar />
            <div className="btn-container">
                <Link to="/login"><Button className="btn-secondary btn-small">Log In</Button></Link>
            </div>
        </nav>
    )
}

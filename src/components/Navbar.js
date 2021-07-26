import React from 'react';
import Button from './Button.js';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav id="nav">
            <div id="logo">
                <h1>the movies</h1>
            </div>
            <div className="btn-container">
                <Link to="/login"><Button btnText="Log In" /></Link>
            </div>
        </nav>
    )
}

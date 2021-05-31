import React from 'react';
import '../css/main.css';

export default function Navbar() {
    return (
        <nav id="nav">
            <div id="logo">
                <h1>the movies</h1>
            </div>
            <div className="btn-container">
                <button className="btn btn-primary">Sign Up</button>
                <button className="btn btn-secondary">Log In</button>
            </div>
        </nav>
    )
}

import React from 'react';
import Button from './Button.js';

export default function Navbar() {
    return (
        <nav id="nav">
            <div id="logo">
                <h1>the movies</h1>
            </div>
            <div className="btn-container">
                <Button btnStyle="primary" btnText="Sign Up" />
                <Button btnText="Log In" />
            </div>
        </nav>
    )
}

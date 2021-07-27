import React from 'react';
import welcomeBackground from '../assets/welcomebg.jpg';
import Button from '../components/Button';
import { Link } from 'react-router-dom';



export default function Welcome() {
    return (
        <main className="welcome welcome--bg" style={{ backgroundImage: `linear-gradient(rgba(5, 25, 32, .9), rgba(5, 25, 32, 0.2)), url(${welcomeBackground})` }}>
            <div style={{ textAlign: 'center' }}>
                <h1 className="welcome__title"><span className="welcome__title__subtitle">Your personal</span> movies assistant</h1>
                <Link to="/register"><Button btnStyle="primary" btnText="Join Now" size="large" /></Link>
            </div>
        </main>

    )
}

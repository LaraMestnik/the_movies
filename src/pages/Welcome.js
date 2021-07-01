import React from 'react';
import welcomeBackground from '../assets/welcomebg.jpg';
import Button from '../components/Button';

console.log(welcomeBackground);

export default function Welcome() {
    return (
        <main className="welcome welcome--bg" style={{ backgroundImage: `linear-gradient(rgba(5, 25, 32, .9), rgba(5, 25, 32, 0.2)), url(${welcomeBackground})` }}>
            <h1 className="welcome__title"><span className="welcome__title__subtitle">Your personal</span> movies assistant</h1>
            <Button btnStyle="primary" btnText="Sign Up" />
        </main>

    )
}

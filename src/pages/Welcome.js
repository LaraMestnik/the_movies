import React from 'react';
import welcomeBackground from '../assets/welcomebg.jpg';

console.log(welcomeBackground);

export default function Welcome() {
    return (
        <main id="welcomeBg" style={{ backgroundImage: `url(${welcomeBackground})` }}>
        </main>
    )
}

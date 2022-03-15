import React from 'react';
import welcomeBackground from '../assets/welcomebg.jpg';
import Button from './Button';
import { Link } from 'react-router-dom';


export default function Welcome() {


    return (
        <main className="welcome" style={{ backgroundImage: `linear-gradient(rgba(5, 25, 32, .9), rgba(5, 25, 32, 0.2)), url(${welcomeBackground})` }}>
            <section className="welcome__heading">
                <h1 className="welcome__title"><span className="welcome__subtitle">Your personal</span> movies assistant</h1>
                <Link to="/signup"><Button className="btn-primary btn-medium" >Sign Up</Button></Link>
            </section>
        </main>
    )
}

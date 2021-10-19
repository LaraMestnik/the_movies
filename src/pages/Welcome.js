import React from 'react';
import welcomeBackground from '../assets/welcomebg.jpg';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import useFetch from '../custom hooks/useFetch';



export default function Welcome() {
    const APIkey = process.env.REACT_APP_TMDB_API_KEY;
    const { data } = useFetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${APIkey}`);
    console.log(data);

    return (
        <main className="welcome welcome--bg" style={{ backgroundImage: `linear-gradient(rgba(5, 25, 32, .9), rgba(5, 25, 32, 0.2)), url(${welcomeBackground})` }}>
            <section id="heading" style={{ textAlign: 'center' }}>
                <h1 className="welcome__title"><span className="welcome__title__subtitle">Your personal</span> movies assistant</h1>
                <Link to="/register"><Button btnStyle="primary" btnText="Sign Up" size="medium" /></Link>
            </section>

            <section id="trendingMovies">

            </section>

        </main>

    )
}

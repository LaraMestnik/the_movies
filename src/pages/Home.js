import React from 'react';
import Navbar from '../components/Navbar';
import Welcome from '../components/Welcome';
import Footer from '../components/Footer';
import TrendingMovies from '../components/TrendingMovies';

export default function Home() {

    return (
        <main>
            <Navbar />
            <Welcome />
            <TrendingMovies />
            <Footer />
        </main>
    )
}

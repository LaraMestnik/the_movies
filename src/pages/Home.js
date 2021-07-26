import React from 'react'
import Navbar from '../components/Navbar';
import Welcome from './Welcome';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <main>
            <Navbar />
            <Welcome />
            <Footer />
        </main>
    )
}

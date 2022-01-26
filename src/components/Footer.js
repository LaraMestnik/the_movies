import React from 'react';
import logo from '../assets/tmdblogo.svg';


export default function Footer() {
    return (
        <footer>
            &copy; Lara Mestnik 2022 - Data Source: <img src={logo} alt="tmdb logo" style={{ width: '100px', marginLeft: '5px' }} />
        </footer>
    )
}

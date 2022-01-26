import React, { useContext } from 'react';
import Button from './Button.js';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar.js';
import Logo from '../components/Logo';
import { GlobalContext } from '../context/GlobalState'

export default function Navbar() {
    const user = useContext(GlobalContext);

    return (
        <nav id="nav">
            <Logo className="logo--white" />
            <SearchBar />
            <div className="btn-container">
                <Link to="/login"><Button className="btn-secondary btn-small">Log In</Button></Link>
            </div>
        </nav>
    )
}

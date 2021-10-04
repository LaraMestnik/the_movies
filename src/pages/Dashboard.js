import React from 'react';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';

export default function Dashboard() {
    const history = useHistory();

    function handleLogOut(e) {
        e.preventDefault();
        auth.signOut()
        history.push("/register");
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={handleLogOut}>Log Out</button>
        </div>
    )
}

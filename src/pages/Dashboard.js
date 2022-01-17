import React, { useState } from 'react';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';

export default function Dashboard() {
    const history = useHistory();
    const [user, setUser] = useState();

    auth.onAuthStateChanged(user => {
        console.log(user);
        user && setUser(user.email);
    });

    function handleLogOut(e) {
        e.preventDefault();
        auth.signOut()
        history.push("/login");
    }


    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={handleLogOut}>Log Out</button>
            <h3>Hello, {user}</h3>
        </div>
    )
}

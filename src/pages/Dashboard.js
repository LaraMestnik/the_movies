import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { GlobalContext } from '../context/GlobalState';
import { auth } from '../firebase';


export default function Dashboard() {
    const history = useHistory();
    const user = useContext(GlobalContext);

    user && console.log(user);

    function handleLogOut(e) {
        e.preventDefault();
        auth.signOut()
        history.push("/login");
    }


    return (
        <div>
            <Navbar />
            <h1>Dashboard</h1>
            <button onClick={handleLogOut}>Log Out</button>
            <h3>Hello, {user && user.email}</h3>
        </div>
    )
}

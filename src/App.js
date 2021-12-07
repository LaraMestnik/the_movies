import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import SingleMoviePage from './pages/SingleMoviePage';
import SearchMovieResults from './pages/SearchMovieResults';

export default function App() {

    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/dashboard">
                <Dashboard />
            </Route>
            <Route exact path="/movie">
                <SingleMoviePage />
            </Route>
            <Route path="/movieresults">
                <SearchMovieResults />
            </Route>
            <Route>404 page</Route>
        </Switch>
    )
}
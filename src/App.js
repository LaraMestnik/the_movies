import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useAuthContext } from './custom hooks/useAuthContext';

//components
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import SingleMoviePage from './pages/SingleMoviePage';
import SearchMovieResults from './pages/SearchMovieResults';

export default function App() {
    const { user, authIsReady } = useAuthContext();

    return (
        <>
            {authIsReady && (
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/">
                            {!user && <Home />}
                            {user && <Redirect to="/dashboard" />}
                        </Route>
                        <Route path="/signup">
                            {!user && <SignUp />}
                            {user && <Redirect to="/dashboard" />}
                        </Route>
                        <Route path="/login">
                            {!user && <Login />}
                            {user && <Redirect to="/dashboard" />}
                        </Route>
                        <Route path="/dashboard">
                            {user && <Dashboard />}
                            {!user && <Redirect to="/signup" />}
                        </Route>
                        <Route exact path="/movie">
                            <SingleMoviePage />
                        </Route>
                        <Route path="/movieresults">
                            <SearchMovieResults />
                        </Route>
                        <Route>404 page</Route>
                    </Switch>
                </BrowserRouter>
            )}
        </>
    )
}
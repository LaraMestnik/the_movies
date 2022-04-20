import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useCustomContext } from './custom hooks/useCustomContext';
import { AuthContext } from './context/AuthContext';
import MoviesContextProvider from './context/MoviesContext';


//components
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import SingleMoviePage from './pages/SingleMoviePage';
import SearchMovieResults from './pages/SearchMovieResults';

export default function App() {
    const { user, authIsReady } = useCustomContext(AuthContext);

    return (
        <>
            {authIsReady && (
                <BrowserRouter>
                    <Switch>

                        <Route path="/signup">
                            {!user && <SignUp />}
                            {user && <Redirect to="/dashboard" />}
                        </Route>
                        <Route path="/login">
                            {!user && <Login />}
                            {user && <Redirect to="/dashboard" />}
                        </Route>

                        <MoviesContextProvider>
                            <Route exact path="/">
                                <Home />
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
                        </MoviesContextProvider>

                        <Route>404 page</Route>
                    </Switch>
                </BrowserRouter>
            )}
        </>
    )
}
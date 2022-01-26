import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/main.css';
import { BrowserRouter } from 'react-router-dom';
import GlobalStateProvider from '../src/context/GlobalState';


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <GlobalStateProvider>
                <App />
            </GlobalStateProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
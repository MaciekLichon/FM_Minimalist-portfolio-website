import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';

import './styles/reset.scss';
import './styles/general.scss';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);

// to make links work in prod add basename={`/${process.env.PUBLIC_URL}`} and make the home path be "" instead of "/"

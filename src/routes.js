import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import ClientsPage from './containers/ClientsPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={ClientsPage} />
    </Route>
)
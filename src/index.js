import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { Router, browserHistory } from 'react-router';
import { ApolloProvider } from 'react-apollo';
import routes from './routes';
import gql from 'graphql-tag'

import './styles/style.css';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
       uri: 'https://du0blsjf97.execute-api.us-west-2.amazonaws.com/dev/graphql'
  }),
});

render(
    <ApolloProvider client={client}>
        <Router history={browserHistory} routes={routes} />
    </ApolloProvider>,    
    document.getElementById('app')
);
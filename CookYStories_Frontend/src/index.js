import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ApolloClient, HttpLink, InMemoryCache} from "apollo-boost"
import {ApolloProvider} from "react-apollo"

const client = new ApolloClient ({
  link: new HttpLink({
    uri: "http://localhost:8080/graphql"
  }),
  cache: new InMemoryCache()
})



ReactDOM.render(
  // <React.StrictMode>
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
// import {BrowserRouter as Router , Route,Link} from 'react-router-dom';
import Todo from './components/todo';
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
    
      <Todo />
      </ApolloProvider>
    );
  }
}

export default App;

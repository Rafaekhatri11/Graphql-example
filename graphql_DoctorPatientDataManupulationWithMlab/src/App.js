import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Patientlist from './components/patient';
import { Image,NavItem,Nav,Navbar } from 'react-bootstrap';
import {BrowserRouter as Router , Route,Link} from 'react-router-dom';
import Addpatient from './components/addpatient';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <Router>

        <div >
          <div style={{ display: 'inline-flex', width: '100%', justifyContent: "center" }}>
            <Image src={require('./graphql.png')} height="100" width="100" />
            <h1 style={{ color: "#e535ab" }}>GraphQl with React Js</h1>

          </div>
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#brand">GraphQl</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1}>
                  <Link to="/">Patient List</Link>
      </NavItem>
                <NavItem eventKey={2} >
                <Link to="/addpatient">
                
                  Add Patient
                </Link>
      </NavItem>

              </Nav>

            </Navbar.Collapse>
          </Navbar>
          <Route  path="/" exact component={Patientlist}/>
          <Route  path="/addpatient" component={Addpatient}/>
        </div>

      </Router>
      </ApolloProvider>
    );
  }
}

export default App;

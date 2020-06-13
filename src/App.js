import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import matilda from './matilda.png';
import polaco from './polaco.png';
import './App.css';
import Amplify  from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
        <Route 
          path="/index" 
          render={props => 
            <div className="App">
              <header className="App-header">
                <img src={matilda} className="App-logo" alt="logo" />
                <p></p>
                <p>
                Matilda a  gata encrenqueira! 
                </p>
                <Link className="App-link" to="/polaco">
                  Conheça também o Polaco
                </Link>
              </header>
            </div>
          } 
      />
      <Route 
          path="/polaco" 
          render={props => 
            <div className="App">
              <header className="App-header">
                <img src={polaco} className="App-logo" alt="logo" />
                <p></p>
                <p>
                Polaco o queridinho da mamãe!
                </p>
                <Link className="App-link" to="/index">
                  Conheça também a Matilda
                </Link>
              </header>
            </div>
          } 
      />
      <Redirect to="/index"/>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

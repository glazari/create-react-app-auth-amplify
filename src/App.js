import React, { Component } from 'react';
import logo from './logo.svg';
import matilda from './matilda.png';
import './App.css';
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={matilda} className="App-logo" alt="logo" />
          <p></p>
          <p>
           Matilda a  gata encrenqueira! 
          </p>
        </header>
      </div>
    );
  }
}

export default App;

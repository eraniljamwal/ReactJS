import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
      super(props);
      console.log("[App.js] Constructor hooks: ",props);
      this.state = {
          persons: [
          {id: '1', name: 'Sunny', age: "28"},
          {id: '2', name: 'An', age: 26},
          {id: '3', name: 'Teena', age: 30},
          ],
          showPersons: false
      }  
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

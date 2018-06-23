import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() { // Let’s destructure a title prop 
    //from the components prop and use it to dynamically 
    //render a title instead of always saying “welcome to react”
    const {title} = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to {title}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

// let's give title a default value in case none is passed to the component
App.defaultProps = {
  title: "React"
};

export default App;

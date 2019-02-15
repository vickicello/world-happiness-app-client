import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <p>Check out my navbar!</p>
          <Navbar />
        </div>
        <div className="main-content">
          <p>Check out my main content!</p>
          <Countries />
        </div>
      </div>
    );
  }
}

export default App;

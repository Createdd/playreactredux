import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>📆 Calendar for learning</h2>
        </div>
        <figure>
          <img
            src="https://image.slidesharecdn.com/reactreduxintroduction-151124165017-lva1-app6891/95/react-redux-introduction-33-638.jpg?cb=1448383914"
            alt="reduxchart" height="200px"
          />

          <figcaption>Redux model as a REMINDER!!!!</figcaption>
        </figure>
        <p className="App-intro">
          <strong> 📆📆📆📆I want to display  a calendar here 🚀 </strong>
        </p>
      </div>
    );
  }
}

export default App;

import React from 'react';
import { Link } from 'react-router';

//import style/logo
import logo from '../logo.svg';
import '../styles/App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>📆 Calendar for learning</h2>
          </Link>
        </div>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

import React from 'react';
import { Link } from 'react-router';

//import style/logo
import logo from '../logo.svg';
import '../styles/App.css';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <div className="center orange">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>🚀🍹Checking People in 🚀🍹</h2>
          </Link>
        </div>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

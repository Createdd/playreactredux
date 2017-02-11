import React from 'react';
import { Link } from 'react-router';

export default class Child extends React.Component {
  render() {
    return (
      <Link to={`/view/${this.props.childs.name}`}>
        <div className="card">
          <div className="card-image">
          <img
            src={this.props.childs.display_src}
            alt={this.props.childs.name}
          /></div>
        <div className="card-content">
            {this.props.childs.name}
          </div>
        </div>
      </Link>
    );
  }
}

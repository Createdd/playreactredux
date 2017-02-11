import React from 'react';
import { Link } from 'react-router';

export default class Detail extends React.Component {
  render() {
    return (
      <div>
        <Link to={`/view/${this.props.childs.name}`}>
          <figure>
            <img
              src={this.props.childs.display_src}
              alt={this.props.childs.name}
              height='200'
            />
            <figcaption>
              {this.props.childs.name}
              <button>Edit Child</button>
            </figcaption>
          </figure>
        </Link>
      </div>
    );
  }
}

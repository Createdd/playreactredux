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
              height='100'
            />
            <figcaption>
              {this.props.childs.name}
            </figcaption>
          </figure>
        </Link>
      </div>
    );
  }
}

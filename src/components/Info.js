import React from 'react';

export default class Info extends React.Component {
  render() {
    return (
      <div className="col s4">
        {this.props.info.category}
      </div>
    );
  }
}

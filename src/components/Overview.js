import React from 'react';
import Child from './Child';

export default class Overview extends React.Component {
  render() {
    return (
      <div>
        <h3 className="center"> Overview </h3>
        <div className="row">
          {this.props.childs.map((item, key) => (
            <div className="col s4" key={key}>
              <Child {...this.props} key={key} childs={item} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

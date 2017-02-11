import React from 'react';
import Child from './Child';

export default class Detail extends React.Component {
  render() {
    const i = this.props.childs.findIndex(
      child => child.name === this.props.params.child
    );
    const childs = this.props.childs[i];
    return (
      <div className="row">
        <div className="col s6">
          <Child {...this.props} i={i} childs={childs} />
        </div>
      </div>
    );
  }
}

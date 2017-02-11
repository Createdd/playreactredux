import React from 'react';
import Child from './Child';
import Info from './Info';

export default class Detail extends React.Component {
  render() {
    const i = this.props.childs.findIndex(
      child => child.name === this.props.params.child
    );
    const childs = this.props.childs[i];
    const info = this.props.data[i];
    console.log(info);
    return (
      <div className="row">
        <div className="col s6">
          <Child {...this.props} i={i} childs={childs} />
        </div>
        <Info {...this.props} i={i} info={info} />
      </div>
    );
  }
}

import React from 'react';

export default class Info extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const title = this.refs.title.value;
    const newInfo = this.refs.newInfo.value;
    this.refs.infoForm.reset();
  }
  render() {
    return (
      <div className="col s4">
        <div className="row">
          <div className="col s12">
            <button onClick={this.props.removeInfo}>❌</button>
            <b>Telephone: </b>
            {this.props.info.tel}
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <button onClick={this.props.removeInfo}>❌</button>
            <b>Category: </b>
            {this.props.info.category}
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <button onClick={this.props.removeInfo}>❌</button>
            Picture:
            <img
              src={this.props.info.display_src}
              alt={this.props.info.name}
              className="responsive-img"
            />
          </div>
        </div>
        <form className="row" ref="infoForm" onSubmit={this.handleSubmit.bind(this)}>
          <div className="col s12">
            <h5>Add new Info ⏬</h5>
            <input
              placeholder="Titel"
              type="text"
              className="validate"
              ref="title"
            />
            <input
              placeholder="New info"
              type="text"
              className="validate"
              ref="newInfo"
            />
            <input type="submit" hidden />
          </div>
        </form>

      </div>
    );
  }
}

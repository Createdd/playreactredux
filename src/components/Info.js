import React from 'react';

export default class Info extends React.Component {
  render() {
    return (
      <form className="col s4">
        <div className="row">
          <div className="col s12">
            Telephone:
            <input
              placeholder={this.props.info.tel}
              type="text"
              className="validate"
            />
          </div>
          </div>
          <div className="row">
            <div className="col s12">
              Category:
              <input
                placeholder={this.props.info.category}
                type="text"
                className="validate"
              />
            </div>
            </div>
            <div className="row">
              <div className="col s12">
                Picture:
                <img src={this.props.info.display_src} alt={this.props.info.name} className="responsive-img"/>
              </div>
              </div>
      </form>
    );
  }
}

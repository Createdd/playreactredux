import React from 'react';

export default class Overview extends React.Component {
  render() {
    return (
      <div>
        <figure>
          <img
            src="https://image.slidesharecdn.com/reactreduxintroduction-151124165017-lva1-app6891/95/react-redux-introduction-33-638.jpg?cb=1448383914"
            alt="reduxchart"
            height="200px"
          />
          <figcaption>Redux model as a REMINDER!!!!</figcaption>
        </figure>

        <div className="App">
          <p className="App-intro">
            <strong> 📆📆📆📆 OVERVIEW HERE🚀 </strong>
          </p>
        </div>
      </div>
    );
  }
}

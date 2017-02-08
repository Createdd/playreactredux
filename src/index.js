import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';

//import components
import App from './components/App';
import Overview from './components/Overview';
import Today from './components/Today';

//import react router dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Overview} />
      <Route path="/view/:day" compomnent={Today} />
    </Route>
  </Router>
);

ReactDOM.render(router, document.getElementById('root'));

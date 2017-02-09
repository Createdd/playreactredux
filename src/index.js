import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';

//import components
import App from './components/App';
import Overview from './components/Overview';
import Child from './components/Child';

//import react router dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store/store';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Overview} />
      <Route path="/view/:child" component={Child} />
    </Route>
  </Router>
);

ReactDOM.render(router, document.getElementById('root'));

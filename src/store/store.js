import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import data
import data from '../data/data';
import children from '../data/children';

// import rootReducer from '../reducers/index';
import rootReducer from '../reducers/index';

const defaultState = {
  children,
  data
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;

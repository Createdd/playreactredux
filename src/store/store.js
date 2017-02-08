import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';


// import rootReducer from '../reducers/index';


const data = [
  {
    "name": "todo-list",
    "first" : "learn redux",
    "second" : "learn immutable",
    "display_src": "https://images.unsplash.com/photo-1483425571841-9662f86c7154?dpr=2&auto=format&fit=crop&w=767&h=382&q=80&cs=tinysrgb&crop="
  },
  {
    "name": "for later",
    "first" : "do sport",
    "second" : "have fun"
  },
];

const defaultState = {
  todo: data,
  free: data
};

export default store = createStore(rootReducer, defaultState);

const history = syncHistoryWithStore(browserHistory, store);

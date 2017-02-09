import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

//import reducers
import data from './data';
import children from './children';

const rootReducer = combineReducers({ data, children, routing: routerReducer });

export default rootReducer;

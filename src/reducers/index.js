import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

//import reducers
import data from './data';
import childs from './childs';

const rootReducer = combineReducers({ data, childs, routing: routerReducer });

export default rootReducer;

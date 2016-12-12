import {combineReducers} from 'redux';
import descriptor from './descriptor'
import process from './process'
import segment from './segment'

const rootReducer = combineReducers({
  descriptor,
  process,
  segment
});

export default rootReducer;

import { combineReducers } from 'redux';
import countriesReducer from './countriesReducer';
import commentsReducer from './commentsReducer';

export default combineReducers({
  trails: countriesReducer,
  comments: commentsReducer
});
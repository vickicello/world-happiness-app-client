import { combineReducers } from 'redux';
import countriesReducer from './countriesReducer';
import commentsReducer from './commentsReducer';

export default combineReducers({
  countries: countriesReducer,
  comments: commentsReducer
});
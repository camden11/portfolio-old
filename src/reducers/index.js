import { combineReducers } from 'redux';
import addressBar from './addressBar';
import typedSection from './typedSection';

export default combineReducers({
  addressBar,
  typedSection
});

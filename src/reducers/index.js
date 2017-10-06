import { combineReducers } from 'redux';
import addressBar from './addressBar';
import typedSection from './typedSection';
import color from './color';

export default combineReducers({
  addressBar,
  typedSection,
  color
});

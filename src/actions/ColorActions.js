import ActionTypes from './ActionTypes';

export const setBackgroundColor = (color) => {
  return {
    type: ActionTypes.SET_BACKGROUND_COLOR,
    color: color
  }
}

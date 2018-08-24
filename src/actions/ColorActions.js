import ActionTypes from './ActionTypes';

export const setColor = (backgroundColor, textColor) => {
  return {
    type: ActionTypes.SET_COLOR,
    payload: {
      backgroundColor: backgroundColor,
      textColor: textColor,
    },
  };
};

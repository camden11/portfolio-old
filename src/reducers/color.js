import ActionTypes from '../actions/ActionTypes';

const initialState = {
  backgroundColor: '#ffffff',
  fontColor: '#272727'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_COLOR:
      return {
        ...state,
        backgroundColor: action.payload.backgroundColor,
        textColor: action.payload.textColor
      }
    default:
      return state;
  }
}

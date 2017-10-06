import ActionTypes from '../actions/ActionTypes';

const initialState = {
  index: 0,
  started: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.START_TYPED_SECTION:
      return {
        ...state,
        started: true
      }
    case ActionTypes.INCREMENT_TYPED_SECTION_INDEX:
      return {
        ...state,
        index: state.index + 1
      };
    case ActionTypes.SET_TYPED_SECTION_INDEX:
      return action.index;
    case ActionTypes.RESET_TYPED_SECTION_INDEX:
      return initialState;
    default:
      return state;
  }
}

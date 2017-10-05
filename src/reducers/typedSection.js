import ActionTypes from '../actions/ActionTypes';

const initialState = -1;

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT_TYPED_SECTION_INDEX:
      return state + 1;
    case ActionTypes.SET_TYPED_SECTION_INDEX:
      return action.index;
    case ActionTypes.RESET_TYPED_SECTION_INDEX:
      return initialState;
    default:
      return state;
  }
}

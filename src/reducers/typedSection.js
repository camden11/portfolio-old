import ActionTypes from '../actions/ActionTypes';
import { TypedSectionPhases } from '../constants';

const initialState = {
  index: 0,
  phase: TypedSectionPhases.ADDRESS_BAR,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FINISH_ADDRESS_BAR_TYPING:
      return {
        ...state,
        phase: TypedSectionPhases.BACKGROUND,
      };
    case ActionTypes.FINISH_BACKGROUND_TYPING:
      return {
        ...state,
        phase: TypedSectionPhases.CONTENT,
      };
    case ActionTypes.INCREMENT_TYPED_SECTION_INDEX:
      return {
        ...state,
        index: state.index + 1,
      };
    case ActionTypes.RESET_TYPED_SECTION:
      return initialState;
    default:
      return state;
  }
};

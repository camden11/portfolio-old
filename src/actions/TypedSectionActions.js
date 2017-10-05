import ActionTypes from './ActionTypes';

export const incrementTypedSectionIndex = () => {
  return {
    type: ActionTypes.INCREMENT_TYPED_SECTION_INDEX
  }
}

export const resetTypedSectionIndex = () => {
  return {
    type: ActionTypes.RESET_TYPED_SECTION_INDEX
  }
}

export const setTypedSectionIndex = (index) => {
  return {
    type: ActionTypes.RESET_TYPED_SECTION_INDEX,
    index
  }
}

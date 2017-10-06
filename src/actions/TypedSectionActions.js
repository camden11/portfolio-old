import ActionTypes from './ActionTypes';

export const startTypedSection = () => {
  return {
    type: ActionTypes.START_TYPED_SECTION
  }
}

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

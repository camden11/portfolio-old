import ActionTypes from './ActionTypes';

export const finishAddressBarTyping = () => {
  return {
    type: ActionTypes.FINISH_ADDRESS_BAR_TYPING
  }
}

export const finishBackgroundTyping = () => {
  console.log('this should be happening');
  return {
    type: ActionTypes.FINISH_BACKGROUND_TYPING
  }
}

export const incrementTypedSectionIndex = () => {
  return {
    type: ActionTypes.INCREMENT_TYPED_SECTION_INDEX
  }
}

export const resetTypedSection = () => {
  return {
    type: ActionTypes.RESET_TYPED_SECTION
  }
}

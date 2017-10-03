import ActionTypes from '../actions/ActionTypes';

const initialState = {
  currentAddress: '',
  previousAddress: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_ADDRESS:
      return {
        previousAddress: state.currentAddress,
        currentAddress: action.address
      }
      return action.address
    default:
      return state;
  }
}

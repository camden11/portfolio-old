import ActionTypes from '../actions/ActionTypes';

const initialState = {
  address: ['']
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_ADDRESS:
      return {
        address: action.address
      }
    default:
      return state;
  }
}

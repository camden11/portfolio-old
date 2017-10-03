import ActionTypes from './ActionTypes';

export const setAddress = (address) => {
  return {
    type: ActionTypes.SET_ADDRESS,
    address
  }
}

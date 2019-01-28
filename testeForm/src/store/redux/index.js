import { ADD_USER } from './types';

const initialState = [];
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return state.concat(action.data);
    default:
      return state;
  }
};

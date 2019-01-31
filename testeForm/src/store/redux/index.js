import { ADD_USER, LOG_IN } from './types';

const initialState = [];
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return state.concat(action.data);
    case LOG_IN:
      return {
        ...state,
        login: action.data
      };
    default:
      return state;
  }
};

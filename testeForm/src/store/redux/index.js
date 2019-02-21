import { ADD_USER, LOG_IN, ON_CHANGE_INPUT, CHECK_FIELDS } from './types';

const initialState = {};
export default (state = initialState, { data, type }) => {
  switch (type) {
    case ADD_USER:
      return {
        ...state,
        user: {
          ...state.user,
          data
        }
      };
    case LOG_IN:
      return {
        ...state,
        login: data
      };
    case ON_CHANGE_INPUT:
      return {
        ...state,
        loginData: {
          ...state.loginData,
          ...data
        }
      };
    case CHECK_FIELDS: {
      const ok =
        state.loginData !== undefined
          ? state.loginData.user && state.loginData.password
            ? true
            : false
          : false;
      return { ...state, fieldsOk: ok };
    }

    default:
      return state;
  }
};

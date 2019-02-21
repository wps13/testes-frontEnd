import { ADD_USER, LOG_IN, ON_CHANGE_INPUT, CHECK_FIELDS } from './types';

export const addUser = data => ({ type: ADD_USER, data });

export const login = data => ({ type: LOG_IN, data });

export const onChangeInput = data => ({ type: ON_CHANGE_INPUT, data });

export const checkFields = () => ({ type: CHECK_FIELDS });

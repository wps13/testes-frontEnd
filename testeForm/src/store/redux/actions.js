import { ADD_USER, LOG_IN } from './types';

export const addUser = data => ({ type: ADD_USER, data });

export const login = data => ({ type: LOG_IN, data });

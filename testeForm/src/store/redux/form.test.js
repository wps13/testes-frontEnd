import { expect } from 'chai';
import { ADD_USER, ON_CHANGE_INPUT, CHECK_FIELDS } from './types';
import Users from './index';

it('should be a function', () => {
  expect(Users).to.be.a('function');
});

it('should add a new user', () => {
  const before = {};
  const action = { type: ADD_USER, data: {} };
  const after = { user: { data: {} } };
  expect(Users(before, action)).to.be.deep.equal(after);
});

it('should return same state if action is unknown', () => {
  const before = {};
  const action = { type: 'UNKNOWN' };
  const after = {};
  expect(Users(before, action)).to.be.deep.equal(after);
});

it('should return initial state if undefined', () => {
  const before = undefined;
  const action = {};
  const after = {};
  expect(Users(before, action)).to.be.deep.equal(after);
});

it('should save the input in redux', () => {
  const before = {};
  const action = { type: ON_CHANGE_INPUT, data: { name: 'Will' } };
  const after = { loginData: { name: 'Will' } };
  expect(Users(before, action)).to.be.deep.equal(after);
});

it('should check if field is filled', () => {
  const before = { loginData: { user: 'Will', password: 123 } };
  const action = { type: CHECK_FIELDS };
  const after = { fieldsOk: true };
  expect(Users(before, action)).to.be.deep.equal(after);
});

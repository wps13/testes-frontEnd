import { expect } from 'chai';
import { ADD_USER } from './types';
import Users from './index';

it('should be a function', () => {
  expect(Users).to.be.a('function');
});

it('should add a new user', () => {
  const before = [];
  const action = { type: ADD_USER };
  const after = [{}];
  expect(Users(before, action)).to.be.deep.equal(after);
});

it('should return same state if action is unknown', () => {
  const before = [];
  const action = { type: 'UNKNOWN' };
  const after = [];
  expect(Users(before, action)).to.be.deep.equal(after);
});

it('should return initial state if undefined', () => {
  const before = undefined;
  const action = {};
  const after = [];
  expect(Users(before, action)).to.be.deep.equal(after);
});

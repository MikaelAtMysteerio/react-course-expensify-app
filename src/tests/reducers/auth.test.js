import authReducer from '../../reducers/auth';

test('test auth reducer login', () => {
  const action = {
    type: 'LOGIN',
    uid: '123'
  }
  const state = authReducer({}, action);
  expect(state.uid).toEqual(state.uid);
});

test('test auth reducer logout', () => {
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer({uid: '123'}, action);
  expect(state).toEqual({});
});
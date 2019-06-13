import {login, logout} from '../../actions/auth'

test('test login', () => {
  const uid = 1;
  expect(login(uid)).toEqual({
    type: 'LOGIN',
    uid
  });
});

test('test logout', () => {
  expect(logout()).toEqual({
    type: 'LOGOUT'
  });
})
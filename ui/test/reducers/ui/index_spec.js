import { createStore } from 'redux';

import uiReducers from 'reducers/ui';

describe('uiReducers', () => {
  it('should have the correct default structure', () => {
    createStore(uiReducers).getState().should.deep.equal({
      registration: {
        createdUser: [],
        registrationErrors: {},
        serverRegistration: false,
        showRegistration: false},
      login: {
        loginErrors: {},
        showLogin: false
      }
    });
  });
});

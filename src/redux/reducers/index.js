import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions';
import { removeItemFromLocalstorage, setItemToLocalstorage } from '../../localstorage';

const signUpState = handleActions({
  [actions.signUpRequest]() {
    return 'requested';
  },
  [actions.signUpFailure]() {
    return 'failed';
  },
  [actions.signUpSuccess]() {
    return 'finished';
  },
}, 'none');

const signInState = handleActions({
  [actions.signInRequest]() {
    return 'requested';
  },
  [actions.signInFailure]() {
    return 'failed';
  },
  [actions.signInSuccess]() {
    return 'finished';
  },
}, 'none');

const userDataInitial = { username: '', token: '', isAuthorized: false };
const userData = handleActions({
  [actions.signInSuccess](state, action) {
    const { username, token, isAuthorized } = action.payload;
    setItemToLocalstorage('token', token);
    setItemToLocalstorage('username', username);
    return { username, token, isAuthorized };
  },
  [actions.logOutSuccess]() {
    removeItemFromLocalstorage('token');
    removeItemFromLocalstorage('username');
    return userDataInitial;
  },
}, userDataInitial);

export default combineReducers({
  signUpState,
  signInState,
  userData,
});

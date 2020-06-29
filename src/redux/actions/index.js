import { createAction } from 'redux-actions';
import * as method from '../../API';

export const signUpRequest = createAction('SIGN_UP_REQUEST');
export const signUpSuccess = createAction('SIGN_UP_SUCCESS');
export const signUpFailure = createAction('SIGN_UP_FAILURE');

// регистрация
export const signUp = (newUserData) => async (dispatch) => {
  dispatch(signUpRequest());
  try {
    await method.signUp(newUserData);
    alert('Регистрация прошла успешно'); // eslint-disable-line no-alert
    dispatch(signUpSuccess());
  } catch (err) {
    alert('Пользователь с таким email уже существует'); // eslint-disable-line no-alert
    dispatch(signUpFailure());
    throw err;
  }
};

export const signInRequest = createAction('LOG_IN_REQUEST');
export const signInSuccess = createAction('LOG_IN_SUCCESS');
export const signInFailure = createAction('LOG_IN_FAILURE');

// авторизация
export const signIn = (userData) => async (dispatch) => {
  dispatch(signInRequest());
  try {
    const response = await method.signIn(userData);
    const responseData = response.data.user;
    const userResponseData = {
      username: responseData.username,
      token: responseData.token,
      isAuthorized: true,
    };
    dispatch(signInSuccess(userResponseData));
  } catch (err) {
    alert('Проверьте введённые данные'); // eslint-disable-line no-alert
    dispatch(signInFailure());
    throw err;
  }
};

export const logOutSuccess = createAction('LOGOUT_SUCCESS');

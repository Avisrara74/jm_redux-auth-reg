import { createAction } from 'redux-actions';
import { signInProcess, signUpProcess } from '../../API';

export const signUpRequest = createAction('SIGN_UP_REQUEST');
export const signUpSuccess = createAction('SIGN_UP_SUCCESS');
export const signUpFailure = createAction('SIGN_UP_FAILURE');

// регистрация
export const signUp = (newUserData, formik) => async (dispatch) => {
  dispatch(signUpRequest());
  try {
    await signUpProcess(newUserData, formik);
    dispatch(signUpSuccess());
  } catch (err) {
    dispatch(signUpFailure());
  }
};

export const signInRequest = createAction('LOG_IN_REQUEST');
export const signInSuccess = createAction('LOG_IN_SUCCESS');
export const signInFailure = createAction('LOG_IN_FAILURE');

// авторизация
export const signIn = (userData, formik) => async (dispatch) => {
  dispatch(signInRequest());
  try {
    const responseUserData = await signInProcess(userData, formik);
    dispatch(signInSuccess(responseUserData));
  } catch (err) {
    dispatch(signInFailure());
  }
};

export const logOutSuccess = createAction('LOGOUT_SUCCESS');

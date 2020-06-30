import axios from 'axios';
import * as routes from './routes';

// проверка на ошибки в полях
export const checkFieldErrors = (errResponse, formik) => {
  Object.entries(errResponse).forEach((error) => {
    const [field, message] = error;
    formik.setFieldError(field, message);
    formik.setSubmitting(false);
  });
};

// проверка на ошибку сети
export const networkErrorCheck = (err) => {
  if (err.message === 'Network Error') {
    alert('Ошибка соединения'); // eslint-disable-line no-alert
  }
};

// проверка ошибки авторизации
export const signInErrorsCheck = (errResponse, formik) => {
  if (Object.keys(errResponse).length > 0) {
    formik.setFieldError('email', 'Неверный логин или пароль');
    formik.setFieldError('password', 'Неверный логин или пароль');
    formik.setSubmitting(false);
  }
};

const httpHeader = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  json: true,
};

// авторизация
export const signInProcess = async (userData, formik) => {
  try {
    const response = await axios({
      ...httpHeader,
      data: JSON.stringify(userData),
      url: routes.signInUrl,
    });

    const responseUserData = response.data.user;

    return {
      username: responseUserData.username,
      token: responseUserData.token,
      isAuthorized: true,
    };
  } catch (err) {
    networkErrorCheck(err);
    signInErrorsCheck(err.response.data.errors, formik);
    throw err;
  }
};

// регистрация
export const signUpProcess = async (newUser, formik) => {
  try {
    await axios({
      ...httpHeader,
      data: JSON.stringify(newUser),
      url: routes.signUpUrl,
    });
    alert('Регистрация прошла успешно'); // eslint-disable-line no-alert
    formik.resetForm();
  } catch (err) {
    networkErrorCheck(err);
    checkFieldErrors(err.response.data.errors, formik);
    throw err;
  }
};

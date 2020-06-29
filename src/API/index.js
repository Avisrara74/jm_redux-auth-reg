import axios from 'axios';
import * as routes from './routes';

const httpHeader = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  json: true,
};

// регистрация
export const signUp = async (newUser) => axios({
  ...httpHeader,
  data: JSON.stringify(newUser),
  url: routes.signUpUrl,
});

// авторизация
export const signIn = async (userData) => axios({
  ...httpHeader,
  data: JSON.stringify(userData),
  url: routes.signInUrl,
});

import React from 'react';
import { uniqueId } from 'lodash';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { Button, Input } from 'antd';
import propTypes from 'prop-types';
import * as Yup from 'yup';

import 'antd/dist/antd.css';
import * as actions from '../../redux/actions';
import '../style.css';

const formikInicialValues = {
  username: '',
  email: '',
  password: '',
  repeatPassword: '',
};

const formItems = [
  {
    id: uniqueId(), title: 'Логин:', name: 'username', placeholder: 'Введите логин',
  },
  {
    id: uniqueId(), title: 'Почта:', name: 'email', placeholder: 'Введите почту',
  },
  {
    id: uniqueId(), title: 'Пароль:', name: 'password', placeholder: 'Введите пароль',
  },
  {
    id: uniqueId(), title: 'Повторите пароль:', name: 'repeatPassword', placeholder: 'Повторите пароль',
  },
];

const formikValidationSchema = Yup.object({
  username: Yup.string()
    .max(30, 'Слишком длинный ник!')
    .required('Заполните поле'),
  email: Yup.string()
    .email('Некорректный email')
    .required('Заполните поле'),
  password: Yup.string()
    .min(8, 'Слишком короткий')
    .max(50, 'Слишком длинный')
    .matches(/^[A-Za-z0-9]+$/, 'Пароль может содержать только латинские символы и цифры')
    .matches(/(?=.*[0-9])/, 'Пароль должен содержать хотя бы одну цифру')
    .matches(/(?=.*[A-Z])/, 'Пароль должен содержать хотя бы одну заглавную букву')
    .required('Заполните поле'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать')
    .required('Заполните поле'),
});

const mapStateToProps = (state) => {
  const { signUpState } = state;
  const isInputsDisable = (signUpState === 'requested');
  const isSignUpRequestSuccess = (signUpState === 'finished');

  const props = { isInputsDisable, isSignUpRequestSuccess };
  return props;
};

const actionCreators = {
  signUp: actions.signUp,
};

const SignUp = (props) => {
  const { signUp, isSignUpRequestSuccess, isInputsDisable } = props;

  const handleOnSignUp = async (formik) => {
    const { username, email, password } = formik.values;
    const newUser = {
      user: {
        username,
        email,
        password,
      },
    };
    signUp(newUser, formik);
  };

  const SignInRedirect = () => (
    (isSignUpRequestSuccess) ? (<Redirect to="sign-in" />) : null
  );

  const formik = useFormik({
    initialValues: formikInicialValues,
    validationSchema: formikValidationSchema,
    onSubmit: () => {
      handleOnSignUp(formik);
    },
  });

  const renderInputs = () => (
    formItems.map((formItem) => (
      <label key={formItem.id} htmlFor={formItem.name} className="form-item">
        {formItem.title}
        <Input
          type={(formItem.name === 'password' || formItem.name === 'repeatPassword') ? 'password' : 'text'}
          placeholder={formItem.placeholder}
          id={formItem.name}
          name={formItem.name}
          onChange={formik.handleChange}
          value={formik.values[formItem.name]}
          disabled={isInputsDisable}
        />
        {formik.touched[formItem.name] && formik.errors[formItem.name] ? (
          <div className="form-item-error">{formik.errors[formItem.name]}</div>
        ) : null}
      </label>
    ))
  );

  return (
    <form onSubmit={formik.handleSubmit} className="form">
      <div className="form-title">Регистрация</div>
      {renderInputs()}
      <div className="form-item">
        <Button
          htmlType="submit"
          type="primary"
          className="form-submit"
          onClick={formik.handleSubmit}
          disabled={isInputsDisable}
        >
          Зарегистрироваться
        </Button>
        <Link to="/sign-in" className="form-link">Страница авторизации</Link>
        {SignInRedirect()}
      </div>
    </form>
  );
};

SignUp.propTypes = {
  signUp: propTypes.func,
  isInputsDisable: propTypes.bool,
  isSignUpRequestSuccess: propTypes.bool,
};

SignUp.defaultProps = {
  signUp: null,
  isInputsDisable: false,
  isSignUpRequestSuccess: false,
};

export default connect(mapStateToProps, actionCreators)(SignUp);

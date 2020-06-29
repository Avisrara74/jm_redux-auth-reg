import React from 'react';
import { uniqueId } from 'lodash';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import { Button, Input } from 'antd';
import propTypes from 'prop-types';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import * as actions from '../../redux/actions';
import '../style.css';

const formikInicialValues = {
  login: '',
  email: '',
  password: '',
  repeatPassword: '',
};

const formItems = [
  {
    id: uniqueId(), title: 'Логин:', name: 'login', placeholder: 'Введите логин',
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
  login: Yup.string()
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

  const props = { isInputsDisable, signUpState };
  return props;
};

const actionCreators = {
  signUp: actions.signUp,
};

const SignUp = (props) => {
  const formik = useFormik({
    initialValues: formikInicialValues,
    validationSchema: formikValidationSchema,
    onSubmit: () => {
      // eslint-disable-next-line no-use-before-define
      handleOnSignUp();
    },
  });
  const handleOnSignUp = async () => {
    const { signUp } = props;
    const { login, email, password } = formik.values;
    const newUser = {
      user: {
        username: login,
        email,
        password,
      },
    };
    signUp(newUser);
    formik.resetForm();
  };

  const { isInputsDisable } = props;

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
      </div>
    </form>
  );
};

SignUp.propTypes = {
  signUp: propTypes.func,
  isInputsDisable: propTypes.bool,
};

SignUp.defaultProps = {
  signUp: null,
  isInputsDisable: false,
};

export default connect(mapStateToProps, actionCreators)(SignUp);

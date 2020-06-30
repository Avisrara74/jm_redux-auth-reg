import React from 'react';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import { Button, Input } from 'antd';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import 'antd/dist/antd.css';
import '../style.css';
import * as actions from '../../redux/actions';

const formikInitialValues = {
  email: '',
  password: '',
};

const mapStateToProps = (state) => {
  const { signInState } = state;
  const isInputsDisable = (signInState === 'requested');

  return { isInputsDisable };
};

const actionCreators = {
  signIn: actions.signIn,
};

const SignIn = (props) => {
  const { isInputsDisable, signIn } = props;

  const handleOnAuthorizationUser = (formik) => {
    const { email, password } = formik.values;
    const userData = {
      user: {
        email,
        password,
      },
    };
    signIn(userData, formik);
  };

  const formik = useFormik({
    initialValues: formikInitialValues,
    onSubmit: () => {
      handleOnAuthorizationUser(formik);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="form">
      <div className="form-title">Авторизация</div>
      <label htmlFor="email" className="form-item">
        Почта:
        <Input
          placeholder="Введите Email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          disabled={isInputsDisable}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="form-item-error">{formik.errors.email}</div>
        ) : null}
      </label>

      <label htmlFor="password" className="form-item">
        Пароль:
        <Input.Password
          id="password"
          name="password"
          placeholder="Введите Пароль"
          onChange={formik.handleChange}
          value={formik.values.password}
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          disabled={isInputsDisable}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="form-item-error">{formik.errors.password}</div>
        ) : null}
      </label>

      <div className="form-item">
        <Button
          type="primary"
          htmlType="submit"
          className="form-submit"
          onClick={formik.handleSubmit}
          disabled={isInputsDisable}
        >
          Войти
        </Button>
        <Link to="sign-up" className="form-link">Регистрация</Link>
      </div>
    </form>
  );
};

SignIn.propTypes = {
  signIn: propTypes.func,
  isInputsDisable: propTypes.bool,
};

SignIn.defaultProps = {
  signIn: null,
  isInputsDisable: false,
};

export default connect(mapStateToProps, actionCreators)(SignIn);

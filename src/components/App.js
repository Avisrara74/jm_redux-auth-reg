import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from './home-page';
import SignIn from './sign-in';
import SignUp from './sign-up';
import PrivateRoute from '../react-router/private-route';
import AuthRoute from '../react-router/auth-route';
import './app.css';
import * as actions from '../redux/actions';
import { signInSuccess } from '../redux/actions';

const mapStateToProps = (state) => {
  const { userData } = state;
  const props = {
    isAuthorized: userData.isAuthorized,
    userData,
  };
  return props;
};

const actionCreators = {
  signInSuccess: actions.signInSuccess,
};

const App = (props) => {
  const { dispatch, isAuthorized } = props;
  const authorizationCheck = () => {
    if (localStorage.token === undefined) return;
    dispatch(signInSuccess({
      isAuthorized: true,
      token: localStorage.token,
      username: localStorage.username,
    }));
  };

  useEffect(() => {
    authorizationCheck();
  }, [isAuthorized]);

  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" exact component={HomePage} />
        <AuthRoute path="/sign-in" component={SignIn} />
        <AuthRoute path="/sign-up" component={SignUp} />
        <Redirect to="/sign-in" />
      </Switch>
    </Router>
  );
};

App.propTypes = {
  dispatch: propTypes.func,
  isAuthorized: propTypes.bool,
};

App.defaultProps = {
  dispatch: null,
  isAuthorized: false,
};

export default connect(mapStateToProps, actionCreators)(App);

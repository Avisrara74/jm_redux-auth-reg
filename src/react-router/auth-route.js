/* eslint react/prop-types: 0 */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const AuthRoute = (props) => {
  const { component: Component, isAuthorized, ...rest } = props;

  return (
    <Route
      {...rest}
      render={() => (isAuthorized ? <Redirect to="/" /> : <Component {...props} />)}
    />
  );
};

export default connect((state) => ({
  isAuthorized: state.userData.isAuthorized,
}), null)(AuthRoute);

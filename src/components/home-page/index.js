import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'antd';
import * as actions from '../../redux/actions';
import '../style.css';
import 'antd/dist/antd.css';

const actionCreators = {
  logOutSuccess: actions.logOutSuccess,
};

const HomePage = (props) => {
  const { logOutSuccess, username } = props;

  const handleOnLogOut = () => {
    logOutSuccess();
  };

  return (
    <div className="home">
      <span className="home-title">
        {`Привет, ${username}`}
      </span>
      <Button className="home-logout" type="primary" onClick={handleOnLogOut}>Выход</Button>
    </div>
  );
};

HomePage.propTypes = {
  logOutSuccess: propTypes.func,
  username: propTypes.string,
};

HomePage.defaultProps = {
  logOutSuccess: null,
  username: '',
};

export default connect((state) => ({
  username: state.userData.username,
}), actionCreators)(HomePage);

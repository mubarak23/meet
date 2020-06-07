import React, { Component, createContext, useEffect, useContext } from 'react';
import { Router, Route, withRouter, useHistory } from 'react-router-dom';
export const UserContext = createContext();

const Meeting = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    const user = JSON.parse(localStorage.get('user'));
    if (user) {
      dispatch({ type: 'USER', payload: user });
    } else {
      history('/signin');
    }
  }, []);
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-4 col-sm-4'>List of Meeting Available</div>
        <div></div>
      </div>
    </div>
  );
};

export default Meeting;

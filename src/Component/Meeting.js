import React, { createContext, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
export const userContext = createContext();

const Meeting = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(userContext);
  useEffect(() => {
    const user = JSON.parse(localStorage.get('token'));
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
        <div>{state.token}</div>
      </div>
    </div>
  );
};

export default Meeting;

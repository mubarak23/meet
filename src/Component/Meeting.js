import React, { createContext, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
//export const userContext = createContext();
import { userContext } from '../App';
const Meet = () => {
  const { dispatch } = useContext(userContext);
  const history = useHistory();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('token'));
    console.log(user);
    if (user) {
    } else {
      history.push('/login');
      dispatch({ type: 'USER', payload: user });
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

export default Meet;

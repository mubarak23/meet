import React, { createContext, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
export const userContext = createContext();

const Meet = () => {
  //const { state, dispatch } = useContext(userContext);
  const history = useHistory();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('token'));
    console.log(user);
    if (!user) {
      history.push('/login');
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

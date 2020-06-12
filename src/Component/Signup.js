import React, { useState } from 'react';
//import { pseudoRandomBytes } from 'crypto';
import { Link, useHistory } from 'react-router-dom';

const Signup = () => {
  const history = useHistory();
  const [name, SetName] = useState('');
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');

  const signupdata = () => {
    fetch('/signup', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          return (
            <div className='toast'>
              <div className='toast-body'>{data.error}</div>
            </div>
          );
        } else {
          history.push('/login');
          return (
            <div className='toast'>
              <div className='toast-body'>{data.message}</div>
            </div>
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className='container'>
      <br></br>
      <div className='col-md-4 col-md-offset-4'>
        <div className='row'>
          <h2>Meet/ Registration form</h2>
        </div>
        <form className='form-group'>
          <div>
            <label>Name</label>
            <input
              type='text'
              value={name}
              onChange={(e) => SetName(e.target.value)}
              placeholder='fullname'
              className='form-control'
            />
            <label>email</label>
            <input
              type='text'
              value={email}
              onChange={(e) => SetEmail(e.target.value)}
              placeholder='email address'
              className='form-control'
            />
            <label>Password</label>
            <input
              type='password'
              value={password}
              placeholder='password'
              onChange={(e) => SetPassword(e.target.value)}
              className='form-control'
            />
          </div>
          <br></br>
          <div>
            <input
              type='submit'
              onClick={() => signupdata()}
              className='btn btn-primary'
              value='Signup'
            />
          </div>
        </form>
        <h5>
          <Link to='/login'>Have An Already Signup Login</Link>
        </h5>
      </div>
    </div>
  );
};

export default Signup;

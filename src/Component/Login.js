import React, { Component, useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
//import  auth  from '../Config/Auth/Auth';

const Signin = () => {
  const history = useHistory();
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  const signindata = () => {
    fetch('/http://127.0.0.1:8000/api/v1/user/signin', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('data');
        if (data.error) {
          return (
            <div className='toast'>
              <div className='toast-body'>{data.error}</div>
            </div>
          );
        } else {
          history.push('/meeting');
          localStorage.setItem('token', data.Token);
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
      <div className='col-md-4 col-md-offset-4'>
        <div className='row'>
          <h2>Login</h2>
        </div>
        <form className='form-group'>
          <div>
            <label>Email</label>
            <input
              type='text'
              value={email}
              onChange={(e) => SetEmail(e.target.value)}
              className='form-control'
              placeholder='email address'
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type='password'
              className='form-control'
              value={password}
              onChange={(e) => SetPassword(e.target.value)}
              placeholder='password'
            />
          </div>
          <div>
            <br></br>
            <input
              type='submit'
              onClick={() => signindata()}
              className='btn btn-primary'
              value='Login'
            />
          </div>
        </form>
        <h5>
          <Link to='/signup'>Yet Signup</Link>
        </h5>
      </div>
    </div>
  );
};

export default Signin;

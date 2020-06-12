import React, { Component, useEffect, useState } from 'react';
//import { pseudoRandomBytes } from 'crypto';
import { Redirect, Link, useHistory } from 'react-router';
import axios from 'axios';

const Signup = () => {
  const history = useHistory();
  const [name, SetName] = useState('');
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');

  const signupdata = () => {};
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
              name='name'
              className='form-control'
            />
            <label>email</label>
            <input
              type='text'
              value={email}
              onChange={(e) => SetEmail(e.target.value)}
              name='email'
              className='form-control'
            />
            <label>Password</label>
            <input
              type='password'
              value={password}
              name='password'
              onChange={(e) => SetPassword(e.target.value)}
              className='form-control'
            />
          </div>
          <br></br>
          <div>
            <input type='submit' className='btn btn-primary' value='Signup' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

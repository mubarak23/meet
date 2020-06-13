import React, { useState } from 'react';
//import { pseudoRandomBytes } from 'crypto';
import { Link, useHistory } from 'react-router-dom';

const Signup = () => {
  const history = useHistory();
  const [name, SetName] = useState('');
  const [email, SetEmail] = useState('');
  const [message, SetMessage] = useState('');
  const [password, SetPassword] = useState('');

  const signupdata = () => {
    fetch('http://127.0.0.1:8000/api/v1/user', {
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
      .then((response) => {
        console.log(response.message);
        SetMessage(response.message);
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
        <div className='alert alert-secondary' role='alert'>
          {!message ? '' : message} <Link to='/login'>Login Here</Link>
        </div>
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
          <button
            type='submit'
            onClick={() => signupdata()}
            className='btn btn-primary'
          >
            Signup
          </button>
        </div>

        <h5>
          <Link to='/login'>Have An Already Signup Login</Link>
        </h5>
      </div>
    </div>
  );
};

export default Signup;

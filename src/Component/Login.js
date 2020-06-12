import React, { Component, useState } from 'react';
import axios from 'axios';
import { withRouter, Link, useHistory } from 'react-router-dom';
//import  auth  from '../Config/Auth/Auth';

const Signin = () => {
  const history = useHistory();
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  const signindata = () => {};
  return (
    <div className='container'>
      <div className='col-md-4 col-md-offset-4'>
        <div className='row'>
          <h2>Login</h2>
        </div>
        <form className='form-group' onSubmit={this.onLoginSubmit}>
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
            <input type='submit' className='btn btn-primary' value='Login' />
          </div>
        </form>
      </div>
    </div>
  );
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loginerror: '',
    };
    this.onFieldChange = this.onFieldChange.bind(this);
    this.onLoginSubmit = this.onLoginSubmit.bind(this);
  }
  onFieldChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onLoginSubmit(event) {
    event.preventDefault();
    console.log(this.state.email);
    axios
      .post('http://127.0.0.1:8000/api/v1/user/signin', {
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        const correct_res = JSON.stringify(response);
        console.log(correct_res);

        console.log(response.data.Token);
        //push data to local storage

        localStorage.setItem('token', response.data.Token);
        this.props.history.push('/meeting');
      });
  }

  render() {
    return (
      <div className='container'>
        <div className='col-md-4 col-md-offset-4'>
          <div className='row'>
            <h2>Login</h2>
          </div>
          <form className='form-group' onSubmit={this.onLoginSubmit}>
            <div>
              <label>Email</label>
              <input
                type='text'
                onChange={this.onFieldChange}
                className='form-control'
                name='email'
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type='password'
                className='form-control'
                onChange={this.onFieldChange}
                name='password'
              />
            </div>
            <div>
              <br></br>
              <input type='submit' className='btn btn-primary' value='Login' />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Signin;

import React, { Component, useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { userContext } from '../App';

const CreatMeeting = () => {
  const history = useHistory();
  const [title, Settitle] = useState('');
  const [description, SetDescription] = useState('');
  const [date, Setdate] = useState('');
  const { dispatch } = useContext(userContext);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('token'));
    console.log(user);
    if (user) {
    } else {
      history.push('/login');
    }
  }, []);
  return (
    <div className='container'>
      <div className='col-10 offset-2'>
        <h3 className='lead'>Create Meeting</h3>

        <div>
          <label htmlFor='Title'>Title</label>
          <input
            type='text'
            value={title}
            className='form-control'
            onChange={(e) => Settitle(e.target.value)}
            placeholder='Meeting Title'
          />
        </div>
        <div>
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            className='form-control'
            name={description}
            onChange={(e) => SetDescription(e.target.value)}
            placeholder='Meeing Description'
          />
        </div>
        <div>
          <label htmlFor='date'>Date</label>
          <input
            type='date'
            name={date}
            className='form-control'
            onChange={(e) => Setdate(e.target.value)}
            placeholder='Meeing Description'
          />
        </div>
        <br></br>
        <input
          type='submit'
          className='btn btn-primary'
          value='Creating Meeting'
        />
      </div>
    </div>
  );
};

export default CreatMeeting;

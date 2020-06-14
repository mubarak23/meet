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
    console.log(user.Token);
    if (user) {
    } else {
      history.push('/login');
    }
  }, []);

  const postMeeting = () => {
    const user = JSON.parse(localStorage.getItem('token'));
    fetch('http://127.0.0.1:8000/api/v1/meeting', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + user.Token,
      },
      body: JSON.stringify({
        title,
        description,
        date,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: 'MEETING', payload: data.meeting });
        history.push('/meeting');
      });
  };
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
        <button
          type='submit'
          onClick={() => postMeeting()}
          className='btn btn-primary'
        >
          Creating Meeting
        </button>
      </div>
    </div>
  );
};

export default CreatMeeting;

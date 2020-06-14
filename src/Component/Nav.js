import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { userContext } from '../App';

const Nav = () => {
  const { state, dispatch } = useContext(userContext);
  const token = JSON.parse(localStorage.getItem('token'));
  const history = useHistory();

  const renderList = () => {
    if (token || state) {
      return [
        <li key='1' className='nav-item'>
          <Link className='nav-link' to='/Meeting'>
            Meetings
          </Link>
        </li>,
        <li key='2' className='nav-item'>
          <Link className='nav-link' to='/create_meeting'>
            Create Meeting
          </Link>
        </li>,

        <li key='3' className='nav-item'>
          <Link className='nav-link' to='/active_meeting'>
            Active Meeting
          </Link>
        </li>,
        <li
          key='4'
          onClick={() => {
            localStorage.clear();
            dispatch({ type: 'CLEAR' });
            history.push('/login');
          }}
          className='nav-item'
        >
          <Link className='nav-link' to='/logout'>
            Logout
          </Link>
        </li>,
      ];
    } else {
      return [
        <li key='5' className='nav-item'>
          <Link className='nav-link' to='/Meeting'>
            Meetings
          </Link>
        </li>,

        <li key='6' className='nav-item'>
          <Link className='nav-link' to='/login'>
            Login
          </Link>
        </li>,
        <li key='7' className='nav-item'>
          <Link className='nav-link' to='/signup'>
            Signup
          </Link>
        </li>,
      ];
    }
  };
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-primary bg-dark'>
        <Link className='navbar-brand' to='/home'>
          Meeting
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarText'>
          <ul className='navbar-nav mr-auto'>{renderList()}</ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

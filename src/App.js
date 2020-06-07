import React, { createContext, useEffect, useContext, useReducer } from 'react';
import { BrowserRouter, Route, useHistory, Switch } from 'react-router-dom';
import Home from './Component/Home';
import Signup from './Component/Signup';
import Login from './Component/Login';
import Nav from './Component/Nav';
import Meeting from './Component/Meeting';
import CreateMeeting from './Component/CreateMeeting';
import Active_Meeting from './Component/Active.Meeting';
import { reducer, initialState } from './reducer/userReducer';
export const userContext = createContext();

const Routing = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(userContext);
  useEffect(() => {
    const user = 1;
    //JSON.parse(localStorage.getItem('user'));
    if (user) {
      dispatch({ type: 'USER', payload: user });
    } else {
      history('/signin');
    }
  }, []);
  return (
    <Switch>
      <Route path='/home' exact component={Home} />
      <Route path='/signup' exact component={Signup} />
      <Route path='/logout' component={Login} />
      <Route path='/login' exact component={Login} />
      <Route path='/meeting' component={Meeting} />
      <Route path='/create_meeting' exact component={CreateMeeting} />
      <Route path='/active_meeting' exact component={Active_Meeting} />
    </Switch>
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <userContext.Provider value={{ state, dispatch }}>
      <div className='body'>
        <BrowserRouter>
          <Nav />
          <Routing />
        </BrowserRouter>
      </div>
    </userContext.Provider>
  );
}

export default App;

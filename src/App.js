import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Component/Home';
import Signup from './Component/Signup'
import Login from './Component/Login'

class App extends Component {

  render() {
    return (
      <div className="body">
        <Route path="/home" exact component={Home}/>
        <Route path="/signup" exact component={Signup}/>
        <Route path="/login" exact component={Login}/>
      </div>
    );
  }
}

export default App;

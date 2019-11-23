import React, { Component } from 'react';
import { Router,  Route } from 'react-router-dom';
import Home from './Component/Home';
import Signup from './Component/Signup'
import Login from './Component/Login'
import Nav from './Component/Nav'

class App extends Component {

  render() {
    return (
      <div className="body">
        <Nav></Nav>
        <Route path="/home" exact component={Home}/>
        <Route path="/signup" exact component={Signup}/>
        <Route path="/login" exact component={Login}/>
        
      </div>
    );
  }
}

export default App;

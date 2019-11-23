import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Component/Home';

class App extends Component {

  render() {
    return (
      <div className="body">
        <Route path="/home" exact component={Home}/>
        <Route path="/signup" exact component={Home}/>
        <Route path="/login" exact component={Home}/>
      </div>
    );
  }
}

export default App;

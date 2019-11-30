import React, { Component } from "react";
import { Router, Route, withRouter } from "react-router-dom";
import { isAuthenticated } from "./Config/Auth/Auth";
import Home from "./Component/Home";
import Signup from "./Component/Signup";
import Login from "./Component/Login";
import Nav from "./Component/Nav";
import Meeting from "./Component/Meeting";
import Logout from "./Component/Logout";
import CreateMeeting from "./Component/CreateMeeting";
import Active_Meeting from "./Component/Active.Meeting";

class App extends Component {
  render() {
    return (
      <div className="body">
        <Nav></Nav>
        <Route path="/home" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route
          path="/logout"
          render={props => (isAuthenticated() ? <Logout /> : <Login />)}
        />
        <Route path="/login" exact component={Login} />
        <Route
          path="/meeting"
          render={props => (isAuthenticated() ? <Meeting {...props} /> : null)}
        />
        <Route path="/create_meeting" exact component={CreateMeeting} />
        <Route path="/active_meeting" exact component={Active_Meeting} />
      </div>
    );
  }
}

export default withRouter(App);

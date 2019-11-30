import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nagivation: false
    };
  }
  logout = () => {
    localStorage.removeItem("token");

    this.props.history.push("/home");
  };

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.logout()}>
          Logout
        </button>
      </div>
    );
  }
}

export default withRouter(Logout);

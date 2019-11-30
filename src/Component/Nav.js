import React, { Component } from "react";
import { isAuthenticated } from "../Config/Auth/Auth";
import { Link } from "react-router-dom";
class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-primary bg-dark">
          <Link className="navbar-brand" to="/home">
            Meeting
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              {isAuthenticated() ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/Meeting">
                    Meetings
                  </Link>
                </li>
              ) : null}
              {isAuthenticated() ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/logout">
                    Logout
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              )}

              {isAuthenticated() ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/create_meeting">
                    Create Meeting
                  </Link>
                </li>
              ) : null}

              {isAuthenticated() ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/active_meeting">
                    Active Meeting
                  </Link>
                </li>
              ) : null}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;

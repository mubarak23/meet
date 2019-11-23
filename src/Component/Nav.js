import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Nav extends Component {

    render() {
        return (
            <div>
             <nav class="navbar navbar-expand-lg navbar-primary bg-light">
            <Link className="navbar-brand" to="/home">Meeting</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                
                <li className="nav-item">
                    <Link className="nav-link" to="/signup">Signup</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
                </ul>
                </div>
                </nav>
            </div>
        );
    }
}

export default Nav;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Home extends Component {

    render() {
        return (
           <div className="container">
               <div className="jumbotron">
               <h1 className="display-4">Meet</h1>
                <p className="lead">Platform that allow you organize all your 
                shecdule meeting</p>
                <p>Your can create meeting for you team member and can also 
                    sigup or unregister for a meetup</p>
                <Link className="btn btn-primary btn-lg" to="signup"
                 role="button">Signup</Link>
               </div>
           </div> 
        );
    }
}

export default Home;
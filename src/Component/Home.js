import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
class Home extends Component {

    render() {
        return (
           <div className="container">
               <div>
               <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to="/home" className="navbar-brand" >Home</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/home">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup">Signup</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        </ul>
                    </div>
                    </nav>
               </div>
           </div> 
        );
    }
}

export default Home;
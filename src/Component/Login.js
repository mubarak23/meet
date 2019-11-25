import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    constructor(props){
        super(props);
        this.state= {
            email: '',
            password: ''
        }
        this.onFieldChange = this.onFieldChange.bind(this);
        this.onLoginSubmit = this.onLoginSubmit.bind(this);

    }    
    onFieldChange(event){
        this.setState({
            [this.event.name]: event.target.value
        })
    }

    onLoginSubmit(event){
        event.preventDefault();
    }
    
    
    render() {
        return (
           <div className="container">
               <div className="col-md-4 col-md-offset-4">
                    <div className="row">
                        <h2>Login</h2>
                        </div>
                        <form className="form-group" onSubmit={this.onLoginSubmit}>
                            <div>
                                <label>Email</label>
                                <input type="text"
                                 className="form-control"
                                  name="email" />
                            </div>
                            <div>
                                <label>
                                    Password
                                </label>
                                <input type="password" className="form-control" name="password"/>
                            </div>
                        </form>  
               </div>
               login page Here
           </div> 
        );
    }
}

export default Login;
import React, { Component } from 'react';
//import { pseudoRandomBytes } from 'crypto';
import { useHistory } from "react-router-dom"

class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
        this.onFieldChange = this.onFieldChange.bind(this);
        this.onSignupSubmit = this.onSignupSubmit.bind(this);
    }
   
    onFieldChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    onSignupSubmit(event){
        event.preventDefault();
        const body = JSON.stringify({'name': this.state.name, 'email': this.state.email, 'password': this.state.password});
        fetch('http://127.0.0.1:8000/api/v1/user', {
            method: 'POST',
            header: new Headers(),
            body
        }).then(
            (data) => console.log(data),
            //useHistory.push('/login')
        ).catch(
            (error)=> console.log(error)
        )
    }
    render() {
        return (
            <div>
                <div className="container">
                    <br></br>
                    <div className="col-4 col-sm-4 offset-1">
                        <form className="form-group" name="name" onSubmit={this.onSignupSubmit}>
                            <div>
                            <label>Name</label>
                            <input type="text" value={this.state.name}
                             onChange={this.onFieldChange}
                             name="name" 
                             className="form-control" />
                            <label>email</label>
                            <input type="text" value={this.state.email} 
                            onChange={this.onFieldChange}
                            name="email" 
                            className="form-control" />
                            <label>Password</label>
                            <input type="password"
                             value={this.state.password} 
                             name="password"
                             onChange={this.onFieldChange} className="form-control"/>
                            </div>
                            <br></br>
                            <div>
                            <input  type="submit" className="btn btn-primary" value="Signup" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;
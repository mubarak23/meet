import React, { Component } from 'react';
import { isTokenExpired } from '../Config/Auth/Auth'


class Meeting extends Component {
    constructor(props){
        super(props);
        }
     isAuthenticated(){
      const token = localStorage.getItem('token');
      if(token){
          return !isTokenExpired(token);
      } else {
        return false;
      }
     }   
    render() {
        return (
           <div className="container">
               <div className="row">
                   <div className="col-md-4 col-sm-4">
                            
                   </div>
               </div> 
           </div>
        );
    }
}

export default Meeting;
//import { EventEmitter } from 'events';
import axios from 'axios'
export default class Auth {
    // eslint-disable-next-line no-useless-constructor
    

    login = (email, password) =>{
        axios.post('/', {
            email,
            password
        }).then(
            (respones) => {
                // eslint-disable-next-line no-unused-expressions
                localStorage.setItem('token', respones.token)
                localStorage.setItem('expireAt', respones.expireAt)
                return respones.token
            }
        ).catch(
            (error) => {
                console.log(error)
                return error
            }
        )
    }
    
} 

export function isAuthenticated(){
    const token = localStorage.getItem('token');
    if(token){
        return token;
    } else {
      return false;
    }
   }
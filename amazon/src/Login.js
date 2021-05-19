
import React, { useState } from 'react';
import './Login.css'

import { Link, useHistory } from "react-router-dom";
import UserService from './loginservice'
import { useStateValue } from "./StateProvider";


function Login() {
    const history = useHistory();
    const [{ user }, dispatch] = useStateValue();
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

   


  const  signin  = e => {
    e.preventDefault();
    
    

   let info = {
       name : username,
       password:password,
            
   }
   
    UserService.signin(info).then(res=>{
     
            console.log(res.data);
     
        dispatch({
        type: "SET_USER",
           user: res.data,
         });
           history.push('/');    });

    }



    const register=e=>{
        alert("fill in the field with the username and password you want than click regiter ");
        e.preventDefault();
        let info = {
          name : username,
            password:password
      }

        UserService.register(info).then(res=>{
            
        dispatch({
            type: "SET_USER",
               user: res.data,
             });
               history.push('/');



        });


    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                 alt = ""/>
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={username} onChange={e => setUsername(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit'  onClick={signin}className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
import React, { useState }from 'react';
import './Login.css';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { createUserFromLogin } from "./DatabaseFunctions";

export default function Login() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state);   

  function handleSubmit(e) {
    e.preventDefault();
    console.log(firstName, lastName, email, password);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  }

  return(
    <div className="login">
   
      <h1>Sign In</h1>
    
      
        <form >
        <input onChange={(e) => 
            dispatch({ type: "LOGIN_FIRSTNAME",
            payload: e.target.value })}
            type="text" placeholder="FirstName" />
            
            <input onChange={(e) =>
            dispatch({ type: "LOGIN_LASTNAME",
            payload: e.target.value })}
            type="text" placeholder="LastName" />
            

            <input onChange={(e) =>
            dispatch({ type: "LOGIN_EMAIL",
            payload: e.target.value })}
            type="text" placeholder="Email" />

            <input onChange={(e) =>
            dispatch({ type: "LOGIN_PASSWORD",
            payload: e.target.value })}
            type="password" placeholder="Password" />
        
           <input type="submit" onClick={(e) => createUserFromLogin(e, user)} />
            
            
        </form>
      <div className="login_image">
        <img src= "https://www.gannett-cdn.com/-mm-/d2fa341cad877107b93b7c99fae7005db9af468e/c=0-804-3026-2513/local/-/media/2016/06/25/USATODAY/USATODAY/636024900068774671-USATSI-9353960.jpg?width=3026&height=1709&fit=crop&format=pjpg&auto=webp" alt="" height="400" width="1450"/>
      </div>
    </div>
  );
}
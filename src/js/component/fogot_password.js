import React, { Component } from "react";
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';



export const Forgotpassword = () =>{
     
const sendEmail =(event) =>{
    event.preventDefault();

    emailjs.sendForm('service_grx5xcq','template_dvxh034',event.target,'s0W3MhRzWmErfBoDS')
    .then(response => console.log(response) )
    .catch (error => console.log(error))  
    
}
return(

<form   id="form" style={{ width: "38rem" }} onSubmit={sendEmail}>
  

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label" style={{color: "white"}}>Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required  name='name'></input>
    <div id="emailHelp" class="form-text" style={{color: "white"}}>We'll never share your email with anyone else.</div>
  </div>

  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label" style={{color: "white"}}>Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required name='email'></input>
    <div id="emailHelp" className="form-text" style={{color: "white"}}>We'll never share your email with anyone else.</div>
  </div>
  
  {/* <Link to="/login"> */}
  <button id='button' type="submit" className="btn btn-primary">Send your password</button>
  {/* </Link> */}
</form>

)}
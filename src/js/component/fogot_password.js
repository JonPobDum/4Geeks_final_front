import React, { Component } from "react";
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import "../../styles/forgot_password.css";



export const Forgotpassword = () =>{
     
const sendEmail =(event) =>{
    event.preventDefault();

    emailjs.sendForm('service_grx5xcq','template_dvxh034',event.target,'s0W3MhRzWmErfBoDS')
    .then(response => console.log(response) )
    .catch (error => console.log(error))  
    
}
      return(
            <div class="container w-75 mt-5">
  
            <div className="row align-items-stretch">
                         
                            <div class="col d-none d-lg-block col-sm-12 col-md-5 col-xl-6 position-relative">
                                  <img class="img-fluid position-absolute top-0 end-0 bg2 r1" src="https://imagizer.imageshack.com/img924/2575/XCBZCz.png" alt="Login image"></img>
                            </div> 
            
            
            <div className="form_fp">
                  <form   id="form" style={{ width: "38rem" }} onSubmit={sendEmail}>
                        <img src="https://imagizer.imageshack.com/img924/6517/IZAfXn.png" height="150px" className="mx-auto d-block"/>
                        <div class="mb-3">
                              <label for="exampleInputEmail1" class="form-label" style={{color: "white"}}>Name</label>
                              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required  name='name'></input>
                              <div id="emailHelp" class="form-text" style={{color: "white"}}></div>
                        </div>

                        <div className="mb-3">
                              <label for="exampleInputEmail1" className="form-label" style={{color: "white"}}>Email address</label>
                              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"  required name='email'></input>
                              <div id="emailHelp" className="form-text" style={{color: "white"}}>We'll never share your email with anyone else.</div>
                        </div>

                  {/* <Link to="/login"> */}
                  <button id='button' type="submit" className="btn btn-primary " style={{ width: "38rem" }}>Ask your password</button>
                  {/* </Link> */}
                  </form>
            </div>
      </div>
      </div>
      
       
);
};
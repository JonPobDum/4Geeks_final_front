import React from "react";
import "../../styles/login.css";

export const Login = () =>{

  return <body className=" body_container d-flex justify-content-center align-items-center vh-100">
      <form className="form_1 pd p-5 text-secondary shadow">
        <div>
          <div className="d-flex justify-content-center">
            <img
              className="img_1"
              src="https://www.freeiconspng.com/thumbs/login-icon/user-login-icon-29.png"
            ></img>
          </div>
          <div className="text-center fs-3 fw-bold">Login</div>
          <div className="input-group mt-4">
            <div className="input-group-text">
              <img
                className="img_2"
                src="https://img2.freepng.es/20180331/wyw/kisspng-email-address-computer-icons-mail-5ac01146cd9c82.7697999315225367748422.jpg"
              ></img>
            </div>
            <input className="input_1 form-control" type="text" placeholder="Username"></input>
          </div>
          <div className="input-group mt-4">
            <div className="input-group-text">
              <img
                className="img_2"
                src="https://w7.pngwing.com/pngs/205/276/png-transparent-computer-icons-password-encapsulated-postscript-others-silhouette-keyhole-user-thumbnail.png"
              ></img>
            </div>
            <input className="input_1 form-control" type="password" placeholder="Password"></input>
          </div>
          <div className="d-flex justify-content-around mt-1">
            <div className="d-flex align-items-center gap-1">
                <input className="form-check-input" type="checkbox"></input>
                <div className="div_remember pt-1">Remember me</div>
            </div>
            <div className="pt-1">
                <a href="" className="div_remember text-decoration-none fst-italic">forgot your password?</a>
            </div>
          </div>
          <div className="btn btn-secondary w-100 mt-4">Login</div>
          <div className="d-flex gap-1 justify-content-center mt-1">
            <div>Dont have a account?</div>
            <a href="" className="text-decoration-none fw-semibold"> Register</a>
          </div>
          <div className="py-3">
            <div className="border-bottom text-center">
                <span>Or</span>
            </div>
          </div>
          <div className="btn btn-light d-flex gap-2 justify-content-center border mt-3 shadow-sm">
            <img className="img_3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png"></img>
            <div className="fw-semibold text-secondary"> Continue with Facebook</div>
        </div>
          </div>
         
      </form>
      </body>
};
 

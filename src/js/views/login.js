import React from "react";
import "../../styles/login.css";

export const Login = () =>{

  return  <div class="container w-75 mt-5">
  
  <div className="row align-items-stretch">
               
                  <div class="col d-none d-lg-block col-sm-12 col-md-5 col-xl-6 position-relative">
                                    <img class="img-fluid position-absolute top-0 end-0 bg2 r1" src="https://imagizer.imageshack.com/img923/7849/7PHYWW.png"></img>
                  </div>
                  <div className="col">
                        <form className="form_1 bg p-5 text-secondary bg1 r2">
                              <div>
                                    <div className="d-flex justify-content-center">
                                          <img className="img_1" src="https://www.freeiconspng.com/thumbs/login-icon/user-login-icon-29.png"></img>
                                    </div>
                                    <div className="text-center fs-3 fw-bold d-grid">Login</div>
                                    <div className="input-group mt-4">
                                                <div className="input-group-text">
                                                      <img className="img_2" src="https://img2.freepng.es/20180331/wyw/kisspng-email-address-computer-icons-mail-5ac01146cd9c82.7697999315225367748422.jpg"></img>
                                                </div>
                                                <input className="input_1 form-control" type="text" placeholder="Username"></input>
                                    </div>
                                    <div className="input-group mt-4">
                                          <div className="input-group-text">
                                                <img className="img_2" src="https://w7.pngwing.com/pngs/205/276/png-transparent-computer-icons-password-encapsulated-postscript-others-silhouette-keyhole-user-thumbnail.png"></img>
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
                                    {/* Le agregue efecto outline para que cuando uno se parara sobre el boton de Login cambiara de color */}
                                    <div className="btn btn-outline-secondary w-100 mt-4"onClick={()=>{
                                          var myHeaders = new Headers();
                                          myHeaders.append("Content-Type", "application/json");
                                          
                                          var raw = JSON.stringify({
                                            "email": "eldya@gmail.com",
                                            "password": "123456"
                                          //   ------------- COMO DEJAR QUE CAPTURE LOS OTROS USUARIOS QUE SE REGISTREN---------
                                          });
                                          
                                          var requestOptions = {
                                            method: 'POST',
                                            headers: myHeaders,
                                            body: raw,
                                            redirect: 'follow'
                                          };
                                          
                                          fetch("https://3000-jonpobdum-4geeksfinalba-6wvcch43a8a.ws-us71.gitpod.io/api/login", requestOptions)
                                            .then(response => response.json())
                                            .then(result => localStorage.setItem("Token",result.token))
                                            .catch(error => console.log('error', error));
                                    }}>Login</div>
                                    <div className="d-flex gap-1 justify-content-center mt-1">
                                          <div>Dont have a account?</div>
                                          <a href="" className="text-decoration-none fw-semibold"> Register</a>
                                    </div>
                                    <div className="py-3">
                                          <div className="border-bottom text-center">
                                                <span>Or</span>
                                          </div>
                                    </div>
                                    {/* Le agregue efecto outline para que cuando uno se parara sobre el boton de Google cambiara de color */}
                                    <div className="btn btn-outline-dark d-flex gap-2 justify-content-center border mt-3 shadow-sm">
                                          <img className="img_3" src="https://freesvg.org/img/1534129544.png"></img>
                                          <div className="fw-semibold text-secondary"> Continue with Google</div>
                                    </div>
                              </div>
                        </form>
                  </div>
            </div>
      </div>
};
    
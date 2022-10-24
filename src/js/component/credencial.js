import React from "react";
import "../../styles/credencial.css";

function Credencial(props) {
  
  return (
    <div class="container mt-4 mb-4 p-3 d-flex justify-content-center">
      <div class="card p-4">
        <div class=" image d-flex flex-column justify-content-center align-items-center">
          <button class="btn btn-secondary">
            {" "}
            <img
              src="https://i.imgur.com/wvxPV9S.png"
              height="100"
              width="100"
            />
          </button>
          <span class="name mt-3"></span>
          <span class="idd">@NOMBRE_USUARIO</span>{" "}
          <div class="d-flex flex-row justify-content-center align-items-center gap-2">
            <span class="idd1">correo_usuario</span>
            <span>
              <i class="fa fa-copy"></i>
            </span>
          </div>
          <div class="d-flex flex-row justify-content-center align-items-center mt-3">
            <span class="number">
              1069 <span class="follow">Followers</span>
            </span>
          </div>{" "}
          <div class=" d-flex mt-2">
            <button class="btn1 btn-dark"> Go to Carrousel</button>
          </div>
          <div class=" d-flex mt-2">
            <button class="btn1 btn-dark">log out </button>
          </div>
          <div class="text mt-3">
            <hi>Welcome to brain manager!</hi>
          </div>
          <div class="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
            {" "}
            <span>
              <i class="fa fa-twitter"></i>
            </span>{" "}
            <span>
              <i class="fa fa-facebook-f"></i>
            </span>{" "}
            <span>
              <i class="fa fa-instagram"></i>
            </span>{" "}
            <span>
              <i class="fa fa-linkedin"></i>
            </span>{" "}
          </div>{" "}
          <div class=" px-2 rounded mt-4 date ">
            {" "}
            <span class="join">Joined May,2021</span>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
}

export default Credencial;

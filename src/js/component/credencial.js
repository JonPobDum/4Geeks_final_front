import React from "react";
import "../../styles/credencial.css";

function Credencial(props) {
  let now = new Date();

  return (
    <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
      <div className="card p-4">
        <div className=" image d-flex flex-column justify-content-center align-items-center">
          {/* ESTE ES EL CIRCULO DONDE ESTA LA IMAGEN Y EL COLOR ESTA EN BOOSTRAP */}
          <button className="btn btn-secondary">
            {" "}
            <img
              src="https://i.imgur.com/wvxPV9S.png"image
              height="100"
              width="100"
            />
          </button>
          <span className="name mt-3"></span>
          <span className="idd">@NOMBRE_USUARIO</span>{" "}
          <div className="d-flex flex-row justify-content-center align-items-center gap-2">
            <span className="idd1">correo_usuario</span>
            <span>
              <i className="fa fa-copy"></i>
            </span>
          </div>
          {/* <div className="d-flex flex-row justify-content-center align-items-center mt-3">
            <span className="number">
              1069 <span className="follow">Followers</span>
            </span>
          </div>{" "} */}
          <div className=" d-flex mt-2">
            <button className="btn1 btn-dark"> Go to my activities </button>
          </div>
          <div className=" d-flex mt-2">
            <button className="btn1 btn-dark"> Go to Carrousel</button>
          </div>
          <div className=" d-flex mt-2">
            <button className="btn1 btn-dark">log out </button>
          </div>
          <div className="text mt-3">
            <hi>Welcome to brain manager!</hi>
          </div>
          <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
            {" "}
            {/* <span>
            <i className="fab fa-twitter"></i>
            </span>{" "}
            <span>
            <i className="fab fa-facebook-f"></i>
            </span>{" "}
            <span>
            <i className="fab fa-instagram"></i>
            </span>{" "}
            <span>
            <i className="fab fa-linkedin-in"></i>
            </span>{" "} */}
          </div>{" "}
          <div className=" px-2 rounded mt-4 date ">
            {" "}
            <span className="join">{now.toDateString()}</span>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
}

export default Credencial;

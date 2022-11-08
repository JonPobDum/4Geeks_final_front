import React, {useContext} from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/credencial.css";
import { QuoteContainer } from "../component/quoteContainer";

function Credencial(props) {
  const {actions} = useContext(Context);

  let history = useHistory();

  let now = new Date();

  return (
        <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
              
              <div className="row align-items-stretch">
										<div className="col d-none d-lg-block col-sm-12 col-md-5 col-xl-6 position-relative">
											    <img src="https://imagizer.imageshack.com/img924/2825/rsA89n.png" className="img-fluid portada" alt="..." />                    
										</div>

              <div className="card p-4">
                <div className=" image d-flex flex-column justify-content-center align-items-center">
                  {/* ESTE ES EL CIRCULO DONDE ESTA LA IMAGEN Y EL COLOR ESTA EN BOOSTRAP */}
                  <button className=" circlePerfil btn ">
                    {" "}
                    <img
                      src="https://i.imgur.com/wvxPV9S.png"image
                      height="100"
                      width="100"
                    />
                  </button>
                  <span className="name mt-3"></span>
                  <span className="idd titulo_nombre">{props.name}@nombre del usaurio</span>{" "}
                  <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                      <span className="idd1 titulo_usuario">{props.email} correo electronico usuario</span>
                    
                  </div>
                  {/* <div className="d-flex flex-row justify-content-center align-items-center mt-3">
                    <span className="number">
                      1069 <span className="follow">Followers</span>
                    </span>
                  </div>{" "} */}
                  <div className=" d-flex mt-2">
                  <Link to="/carousel">
                    <button className="actividad btn-dark"> Choose your activity </button>
                    </Link>
                  </div>
                  {/* <div className=" d-flex mt-2">
                    <button className="actividad btn-dark"> Go to Carrousel</button>
                  </div> */}
                  <div className=" d-flex mt-2">
                    <button className="actividad btn-dark" onClick={()=> actions.aa(history)}>Log out </button>
                  </div>
                  <div className="text mt-3 titulo_welcome">
                  <QuoteContainer />
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
                    <span className="fechayhora">{now.toDateString()}</span>{" "}
                  </div>{" "}
                </div>{" "}              
              </div>
            </div>
      </div>    
    );
}

export default Credencial;

import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/register.css";

export const Register = () => {
  const { actions } = useContext(Context);
  const history = useHistory();
  return (
    <body className="register">
          <div class="container w-75 mt-5">
                <div className="row align-items-stretch">
                  <div class="col d-none d-lg-block col-sm-12 col-md-5 col-xl-6 position-relative">
                    <img
                      class="img-fluid position-absolute top-0 end-0 bg2 r1"
                      src="https://imagizer.imageshack.com/img924/5484/mMjJWV.png"
                    ></img>
                  </div>
                  <div className="col">
                    <form
                      className="form_1 bg p-5 text-secondary bg1 r2"
                      onSubmit={(e) => {
                        e.preventDefault();

                        actions.register(
                          e.target[0].value,
                          e.target[1].value,
                          e.target[2].value,
                          e.target[3].value,
                          e.target[4].value,
                          
                        );
                      }}
                    >
                      <div>
                        <div className="d-flex justify-content-center">
                          <img
                            className="img_4"
                            src="https://imagizer.imageshack.com/img924/889/uFTr2J.png"
                          ></img>
                        </div>
                        <div className="text-center fs-4 fw-bold">
                          Fill up this form
                        </div>
                        {/* Aca estan los input en donde el usuario debe ingresar datos para realizar el registro */}
                        <div className="input-group mt-4">
                          <div className="input-group-text">
                            <img
                              className="img_registro_input"
                              src="https://icons.veryicon.com/png/o/internet--web/aeps/full-name.png"
                            ></img>
                          </div>
                          <input
                            className="input_1 form-control"
                            type="text"
                            placeholder="name" required
                          ></input>
                        </div>

                        {/* <div className="input-group mt-3">
                                              <div className="input-group-text">
                                                <img
                                                  className="img_registro_input"
                                                  src="https://img1.freepng.es/20180217/pfq/kisspng-female-gender-symbol-clip-art-unisex-restroom-cliparts-5a8867d1a0a0a2.3019665915188889136579.jpg"
                                                ></img>
                                              </div>
                                              Lista desplegable para seleccionar sexo
                                              <select className="form-select" id="autoSizingSelect"> 
                                                <option selected>Seleccione un sexo</option>
                                                <option value="1">Hombre</option>
                                                <option value="2">Mujer</option>
                                              </select>
                                            </div> */}
                        <div className="input-group mt-3">
                          <div className="input-group-text">
                            <img
                              className="img_registro_input"
                              src="https://img1.freepng.es/20180217/pfq/kisspng-female-gender-symbol-clip-art-unisex-restroom-cliparts-5a8867d1a0a0a2.3019665915188889136579.jpg"
                            ></img>
                          </div>
                          <input
                            className="input_1 form-control"
                            type="text"
                            placeholder="gender" required
                          ></input>
                        </div>

                        <div className="input-group mt-3">
                          <div className="input-group-text">
                            <img
                              className="img_registro_input"
                              src="https://www.freeiconspng.com/thumbs/birthday-icon/birthday-cake-icon-1.png"
                            ></img>
                          </div>
                          <input
                            className="input_1 form-control"
                            type="text"
                            placeholder="age" required
                          ></input>
                        </div>

                        <div className="input-group mt-3">
                          <div className="input-group-text">
                            <img
                              className="img_registro_input"
                              src="https://img2.freepng.es/20180331/wyw/kisspng-email-address-computer-icons-mail-5ac01146cd9c82.7697999315225367748422.jpg"
                            ></img>
                          </div>
                          <input
                            className="input_1 form-control"
                            type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                            placeholder="email" required
                          ></input>
                        </div>

                        <div className="input-group mt-3">
                          <div className="input-group-text">
                            <img
                              className="img_registro_input"
                              src="https://img1.freepng.es/20180601/uzi/kisspng-computer-icons-password-password-5b11e0403fb654.882826191527898176261.jpg"
                            ></img>
                          </div>
                          <input
                            className="input_1 form-control"
                            type="password"
                            placeholder="password" required
                          ></input>
                        </div>

                        {/* <div className="input-group mt-3">
                                              <div className="input-group-text">
                                                <img
                                                  className="img_registro_input"
                                                  src="https://img1.freepng.es/20180601/uzi/kisspng-computer-icons-password-password-5b11e0403fb654.882826191527898176261.jpg"
                                                ></img>
                                              </div>
                                              <input
                                                className="input_1 form-control"
                                                type="password"
                                                placeholder="Ingrese nuevamente la contraseña"
                                              ></input>
                                            </div> */}

                        {/* Aca esta el botón con el cual el usaurio envia los datos para creación de cuenta, se debe realizar un POST */}
                        <button
                          className="btn btn-outline-secondary w-100 mt-4"
                          type="submmit"
                        >
                        🖋️ Register
                        </button>
                        <div className="py-3">
                          <div className="border-bottom text-center"></div>
                        {/* </div>
                        <div className="btn btn-outline-dark d-flex gap-2 justify-content-center border mt-3 shadow-sm">
                          <img
                            className="img_3"
                            src="https://freesvg.org/img/1534129544.png"
                          ></img>
                          <div className="fw-semibold text-secondary">
                            {" "}
                            Register up with your Google account
                          </div> */}
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
    </body> 
  );
};

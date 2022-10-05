import React from "react";
import "../../styles/register.css";
import "../../styles/login.css";

export const Register = () => {
  return (
    <body className=" body_register d-flex justify-content-center align-items-center vh-100">
      <form className="form_register pd p-5 text-secondary shadow">
        <div>
          <div className="d-flex justify-content-center">
            <img
              className="img_4"
              src="https://static.thenounproject.com/png/538753-200.png"
            ></img>
          </div>
          <div className="text-center fs-4 fw-bold">Formulario de registro</div>

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
              placeholder="Nombre"
            ></input>
          </div>
          
          <div className="input-group mt-3">
            <div className="input-group-text">
              <img
                className="img_registro_input"
                src="https://img1.freepng.es/20180217/pfq/kisspng-female-gender-symbol-clip-art-unisex-restroom-cliparts-5a8867d1a0a0a2.3019665915188889136579.jpg"
              ></img>
            </div>
            {/* Lista desplegable para seleccionar sexo */}
            <select className="form-select" id="autoSizingSelect"> 
              <option selected>Seleccione un sexo</option>
              <option value="1">Hombre</option>
              <option value="2">Mujer</option>
            </select>
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
              placeholder="Fecha de nacimiento DD/MM/AAAA"
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
              type="text"
              placeholder="Correo electrónico"
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
              placeholder="Ingrese su contraseña"
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
              placeholder="Ingrese nuevamente la contraseña"
            ></input>
          </div>

          {/* Aca esta el botón con el cual el usaurio envia los datos para creación de cuenta, se debe realizar un POST */}
          <div className="btn btn-secondary w-100 mt-4">Registrar!</div>
          <div className="py-3">
            <div className="border-bottom text-center"></div>
          </div>
          <div className="btn btn-light d-flex gap-2 justify-content-center border mt-3 shadow-sm">
            <img
              className="img_3"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png"
            ></img>
            <div className="fw-semibold text-secondary">
              {" "}
              Registrate con tu cuenta de Facebook !
            </div>
          </div>
        </div>
      </form>
    </body>
  );
};

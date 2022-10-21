
import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from 'react-router-dom';

 export function Recuperar_Clave() {
    
  const { store, actions } = useContext(Context);
  const [correo, setCorreo] = useState("");

  return (

      <div>
        <form justify="center" style={{ width: "38rem" }}>
          <div className="mb-3">
            <label className="form-label" style={{color: "white"}}>Enter your e-mail</label>
            <input type="email" className="form-control"
              onChange={e => setCorreo(e.target.value)}
              value={correo}
              id="exampleInputEmail1" aria-describedby="emailHelp"
              placeholder="example@email.com" />
            <div id="emailHelp" className="form-text" style={{color: "white"}}>We'll never share your email with anyone else.</div>
          </div>

          <Link to="/login">
            <button type="submit" className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                actions.recuperar_password(correo);

              }} >
            Send your password
          </button>
        </Link>
      </form>
    </div>

    
  );
}


import React, { useEffect, useState, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import "../../styles/agenda.css";
import { Context } from "../store/appContext";

export const Agenda = () => {

// CONSTANTES PARA APLICAR METODO PARA INICIAR AGENDA CON TOKEN.
// ESTAS FUNCIONES SE PODRAN REALIZAR CUANDO SE UNAN LAS VISTAS Y CONTENTA EL FLUX DE LOGIN QUE CHEQUEA TOKEN
  // const history = useHistory();
  // const { store, actions } = useContext(Context);

  const getTask = () => {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/nicola", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((response) => {
        setLista(response), console.log(response);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getTask();

    // ACA ESTA LA CONDICION EN DONDE REVISO TOKEN PARA INGRESAR A AGENDA
    // if (localStorage.getItem("Token")) {
    //   alert("debes iniciar sesión para ingresasr", actions.usuario());
    // } else {
    //   history.push("/agenda");
    // }
  }, []);

  /*TODO LIST */

  const [lista, setLista] = useState([]);
  const norefresh = (evento) => {
    evento.preventDefault();
    console.log(evento.target[0].value);
    setLista([...lista, evento.target[0].value]);
    //setLista([...lista,{label:´${aqui va la tarea}´,done:´${false}´])
  };
  const agregarDato = (e) => {
    e.preventDefault();
    setLista([...lista, { label: `${e.target[0].value}`, done: false }]);
    // console.log(lista)
    fetch("https://assets.breatheco.de/apis/fake/todos/user/nicola", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([
        ...lista,
        { label: `${e.target[0].value}`, done: false },
      ]),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
    // CODIGO PARA DEJAR EL INPUT VACIO
    e.target[0].value = " ";
  };

  const DeleteItems = (indexItem) => {
    setLista((prevState) =>
      prevState.filter((elemento, indice) => indice !== indexItem)
    );
    fetch("https://assets.breatheco.de/apis/fake/todos/user/nicola", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([
        ...lista,
        { label: `${e.target[0].value}`, done: false },
      ]),
    });
  };

  return (
    <div className="container agenda_form">
      <form type="submit" onSubmit={agregarDato}>
        <h1 className="Titulo h1_agenda">Agenda</h1>
        {/* <p> Tareas:</p> */}
        <input className="input_agenda" maxLength={50} type="text" placeholder="ingrese sus actividades"></input>
      </form>
      <ul>
        {lista.map((elemento, indice) => {
          return (
            <li className="li_agenda" key={indice}>
              {elemento.label}{" "}
              <button className="btn" onClick={() => DeleteItems(indice)}>
                <i className="fas fa-trash-alt" />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

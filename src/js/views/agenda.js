import React, { useEffect, useState, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import "../../styles/agenda.css";

import { Context } from "../store/appContext";
export const Agenda = () => {

// CONSTANTES PARA APLICAR METODO PARA INICIAR AGENDA CON TOKEN.
// ESTAS FUNCIONES SE PODRAN REALIZAR CUANDO SE UNAN LAS VISTAS Y CONTENTA EL FLUX DE LOGIN QUE CHEQUEA TOKEN
  const history = useHistory();
  const { store, actions } = useContext(Context);

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
   // NO PUEDES VER LA VISTA AL MENOS QUE TENGAS TOKEN
      //   if(localStorage.getItem("token")){
      //     alert("Bienvenido!")
      //       history.push("/todolist")
      //     }
      // else{
      //     history.push("/")
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
    let aux = lista.map((e, index) => {
      if (index == indexItem) {
        e.done = true;
      }
      return e;
    });
    setLista(aux);
    
    fetch("https://assets.breatheco.de/apis/fake/todos/user/nicola", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([
        ...lista
      ]),
    });
  };

  return (
                <div className="container agenda_form">
                              <form type="submit" onSubmit={agregarDato}>
                                <h1 className="Titulo h1_agenda">What's the Plan for Today?</h1>
                                {/* <p> Tareas:</p> */}
                                <input className="input_agenda" maxLength={70} type="text" placeholder="enter your task"></input>
                              </form>
                              <ul>
                                {lista.map((elemento, indice) => {
                                  if (elemento.done==false)
                                  return (
                                    <li className="li_agenda" key={indice}>
                                      {elemento.label}{" "}
                                      <button className="btn" onClick={() => DeleteItems(indice)}>
                                      <i className="fas fa-times icono_1"></i>
                                      
                                     
                                      </button>
                                    </li>
                                  );
                                })}
                              </ul>  
                              <p className="Advise">
                                  ⚠️ Advice: Get More Done with tThese Simple Tips for Better To-Do Lists
                              </p>
                              <p className="Advise">
                                  1. Choose the Right App...or Paper: are easy to edit, which means you can update information quickly, are hard to lose because the list itself is usually saved in the cloud, can sort your tasks by priority, due date, or alphabetically, and, let you assign tasks to other people and get notified when they complete them
                              </p>
                              <p className="Advise">
                                  2. Write Down Your Tasks as Soon as You Think of Them 
                              </p>
                              <p className="Advise">
                                  3. Assign Due Dates
                              </p>            
                              <p className="Advise">
                                  4. Revise Your To-Do Lists Daily
                              </p>               
                              <p className="Advise">
                                  5. Limit Yourself to 3–5 Tasks per Day
                              </p>
                              <p className="Advise">
                                  6. Put Tasks on Your To-Do List, Not Goals
                              </p>
                              <p className="Advise">
                                  7. Check Those Boxes 
                              </p>
                </div> 
  
  
  
  
  );



};





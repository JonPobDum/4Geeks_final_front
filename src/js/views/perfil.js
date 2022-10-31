import React,{useEffect,useContext} from "react";
import { Context } from "../store/appContext";
import Credencial  from "../component/credencial";
import { useHistory } from "react-router-dom";

export const Perfil = () =>{

    const  history = useHistory();

    useEffect(()=>{
        // NO PUEDES VER LA VISTA AL MENOS QUE TENGAS TOKEN
      //   if(localStorage.getItem("token")){
      //     alert("Bienvenido!")
      //       history.push("/perfil")
      //     }
      // else{
      //     history.push("/")
      // }
        
      },[])


    return <Credencial/>
    
}
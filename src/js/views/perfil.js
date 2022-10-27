import React,{useEffect,useContext} from "react";
import { Context } from "../store/appContext";
import Credencial  from "../component/credencial";
import { useHistory } from "react-router-dom";

export const Perfil = () =>{

    const  history = useHistory();

    // useEffect(()=>{
        
    //     if(localStorage.getItem("Token")){
    //       alert("welcome")
    //       }
    //   else{
    //       history.push("/")
    //   }
        
    //   },[])


    return <Credencial/>
    
}
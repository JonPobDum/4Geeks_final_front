import React,{useEffect,useContext} from "react";
import { Context } from "../store/appContext";
import Credencial  from "../component/credencial";
import { useHistory } from "react-router-dom";
import { QuoteContainer } from "../component/quoteContainer";

export const Perfil = () =>{

    const  history = useHistory();
    const {actions, store} = useContext(Context);

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


    return  <>
    
    <Credencial/>
  </>
    
    // <div>
      
    //   {store.usuarios.map((o,index)=>{
    //     return <Credencial name={o.name} email={o.email}/>
    //   })}   
    //   </div>
    
}
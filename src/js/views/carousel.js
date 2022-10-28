import React, { useEffect, useState, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Carousel } from "../component/carousel";
import { Curtain } from "../component/curtain";
import "../../styles/curtain.css";
export const Slideshow = () => {

     const  history = useHistory();

     useEffect(()=>{
        //  PARA NO MOSTRAR LA VISTA AL MENOS QUE TENGAS TOKEN
    //      if(localStorage.getItem("token")){
    //          history.push("/carousel")
    //        }
    //    else{
    //        history.push("/")
    //    }
         
       },[])

    
    return <div>
       <div className="row d-block d-md-none">
            <Carousel/>
       </div>
       <div className="row d-none d-md-block">
            <Curtain/>
       </div>
      
        
    </div>
}
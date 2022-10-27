import React, { useEffect, useState, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Carousel } from "../component/carousel";
import { Curtain } from "../component/curtain";
import "../../styles/curtain.css";
export const Slideshow = () => {

     const  history = useHistory();

     // useEffect(()=>{
         
     //     if(localStorage.getItem("Token")){
     //       console.log("welcome")
     //       }
     //   else{
     //       history.push("/carousel")
     //   }
         
     //   },[])
 

    
    return <div>
       <div className="row d-block d-md-none">
            <Carousel/>
       </div>
       <div className="row d-none d-md-block">
            <Curtain/>
       </div>
      
        
    </div>
}
import React from "react";
import { Carousel } from "../component/carousel";
import { Curtain } from "../component/curtain";
import "../../styles/curtain.css";
export const Slideshow = () => {
    
    return <div>
       <div className="row d-block d-md-none">
            <Carousel/>
       </div>
       <div className="row d-none d-md-block">
            <Curtain/>
       </div>
      
        
    </div>
}
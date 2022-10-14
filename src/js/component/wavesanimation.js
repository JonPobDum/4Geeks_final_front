import React from "react";
import { Link } from "react-router-dom";
import "../../styles/waves.css"
export const Waveanimation  = () =>{
    return(
        <body>
            <div className="pluse">
                <div className="circles">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG" alt="binaureal head"></img>
            </div>
            <div className="waves">
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
            </div>
</body>
    )
}

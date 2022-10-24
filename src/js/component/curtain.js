import React from "react";
import { Link } from "react-router-dom";
import "../../styles/curtain.css";

export const Curtain  = () =>{
    return (
        <body>
            <h1>
                Choose your activity
            </h1>
           <div class="gallery">
                <img src="https://imagizer.imageshack.com/img924/1715/7bXGv6.png" alt="To Do List" className="rounded-4"/>
                <img src="https://imagizer.imageshack.com/img923/7686/3htzBE.png" alt="Focus Session" className="rounded-4"/>
                <img src="https://imagizer.imageshack.com/img922/6886/5wcFG4.png" alt="Relax Session" className="rounded-4"/>
                <img src="https://imagizer.imageshack.com/img923/1672/ulqDeP.png" alt="Sleep Session" className="rounded-4"/>
                <img src="https://imagizer.imageshack.com/img924/88/VnfrbR.png" alt="Meditation Session" className="rounded-4"/>
            </div>
        </body>
   
    );
};
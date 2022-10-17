import React from "react";
import { Link } from "react-router-dom";
import "../../styles/curtain.css";

export const Curtain  = () =>{
    return (
        <div>
            <h1>
                Choose your activity
            </h1>
           <div class="gallery">
                <img src="https://imagizer.imageshack.com/img922/808/GEBaSR.png" alt="To Do List"/>
                <img src="https://imagizer.imageshack.com/img922/9371/5nAEie.png" alt="Focus Session"/>
                <img src="https://imagizer.imageshack.com/img923/8467/wZXfgc.png" alt="Relax Session"/>
                <img src="https://imagizer.imageshack.com/img924/4411/KeXrN3.png" alt="Sleep Session"/>
                <img src="https://imagizer.imageshack.com/img924/6797/s19s1H.png" alt="Meditation Session"/>
            </div>
        </div>
   
    );
};
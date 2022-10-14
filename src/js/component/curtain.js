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
                <img src="https://imagizer.imageshack.com/img922/4594/7EUVYp.png" alt="To Do List"/>
                <img src="https://imagizer.imageshack.com/img924/6793/vZZG30.png" alt="Focus Session"/>
                <img src="https://imagizer.imageshack.com/img922/2292/uPd1dd.png" alt="Relax Session"/>
                <img src="https://imagizer.imageshack.com/img924/6034/2bdGIn.png" alt="Sleep Session"/>
                <img src="https://imagizer.imageshack.com/img923/4583/Ispj74.png" alt="Meditation Session"/>
            </div>
        </div>
   
    );
};
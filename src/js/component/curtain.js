import React from "react";
import { useHistory } from "react-router-dom";
import "../../styles/curtain.css";

export const Curtain  = () =>{
    // Se usó una función que creamos goToUrl para poder ir a otra rama
    const history = useHistory()
    const goToUrl = url=>history.push(url)
         return (
                <body className="curtain">
                    <h1 className="h1_curtain">
                        Choose your activity 
                    </h1>
                    {/* Insertamos la clase onClick para insertar la funcion goToUrl llamando a la rama correspondiente */} 
                    
                <div class="gallery">
                        <img
                        onClick={()=>goToUrl("/todolist")} 
                        src="https://imagizer.imageshack.com/img924/1715/7bXGv6.png" 
                        alt="To Do List" className="rounded-4"/>

                        <img 
                        onClick={()=>goToUrl("/pomodoro")} 
                        src="https://imagizer.imageshack.com/img923/7686/3htzBE.png" 
                        alt="Focus Session" className="rounded-4"/>
                    
                        <img 
                        onClick={()=>goToUrl("/playermode")} 
                        src="https://imagizer.imageshack.com/img922/6886/5wcFG4.png" 
                        alt="Relax Session" className="rounded-4"/>
                    
                        <img 
                        onClick={()=>goToUrl("/playermode")} 
                        src="https://imagizer.imageshack.com/img923/1672/ulqDeP.png" 
                        alt="Sleep Session" className="rounded-4"/>
                        
                        <img 
                        onClick={()=>goToUrl("/playermode")}
                        src="https://imagizer.imageshack.com/img924/88/VnfrbR.png" 
                        alt="Meditation Session" className="rounded-4"/>
                
                    </div>
                </body>
   
    );
};
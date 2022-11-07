import React from "react";
import { useHistory } from "react-router-dom";
import "../../styles/carousel.css"

export const Carousel  = () =>{
    
    // Se usó una función que creamos goToUrl para poder ir a otra rama
    const history = useHistory()
    const goToUrl = url=>history.push(url)
    return(
        <div className="carousel">
              <h1 className="h1_carousel">
                Choose your activity
            </h1>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
               
                </div>
            <div className="carousel-inner">
                    <div className="carousel-item active rounded-2">
                        
                        {/* Insertamos la clase onClick para insertar la funcion goToUrl llamando a la rama correspondiente */}
                        <img onClick= {()=>goToUrl("/todolist")} src="https://imagizer.imageshack.com/img924/1715/7bXGv6.png" className="d-block w-100" alt="To Do List image"/>
                    </div>

                    <div className="carousel-item rounded-2">
                        <img onClick={()=>goToUrl("/pomodoro")}  src="https://imagizer.imageshack.com/img923/7686/3htzBE.png" className="d-block w-100" alt="Focus image"/>
                    </div> 

                    <div className="carousel-item rounded-2">
                        <img onClick= {()=>goToUrl("/playermode")} src="https://imagizer.imageshack.com/img922/6886/5wcFG4.png" className="d-block w-100" alt="Relax image"/>
                    </div> 

                    <div className="carousel-item rounded-4">
                        <img onClick= {()=>goToUrl("/playermode")} src="https://imagizer.imageshack.com/img923/1672/ulqDeP.png" className="d-block w-100" alt="Sleep image"/>
                    </div> 

                    <div className="carousel-item rounded-4">
                        <img onClick= {()=>goToUrl("/playermode")} src="https://imagizer.imageshack.com/img924/88/VnfrbR.png" className="d-block w-100" alt="Meditation image"/>
                    </div> 

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </div>
    )
}

import React from "react";
import { Link } from "react-router-dom";

export const Carousel  = () =>{
    return(
        <div className="container-fluid w-25">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
               
                </div>
            <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://imagizer.imageshack.com/img922/4594/7EUVYp.png" className="d-block w-100" alt="To Do List image"/>
                    </div>

                    <div className="carousel-item">
                        <img src="https://imagizer.imageshack.com/img924/6793/vZZG30.png" className="d-block w-100" alt="Focus image"/>
                    </div>

                    <div className="carousel-item">
                        <img src="https://imagizer.imageshack.com/img922/2292/uPd1dd.png" className="d-block w-100" alt="Relax image"/>
                    </div>

                    <div className="carousel-item">
                        <img src="https://imagizer.imageshack.com/img924/6034/2bdGIn.png" className="d-block w-100" alt="Sleep image"/>
                    </div>

                    <div className="carousel-item">
                        <img src="https://imagizer.imageshack.com/img923/4583/Ispj74.png" className="d-block w-100" alt="Meditation image"/>
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

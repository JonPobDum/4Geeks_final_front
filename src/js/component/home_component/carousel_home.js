import React from "react";
import "../../../styles/home.css";


export const Carousel_home = () => {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
		    <div className="carousel-inner rounded-3">
			    <div className="carousel-item active">
				    <img src="https://static.timesofisrael.com/www/uploads/2022/04/iStock-1325376146.jpg" className="d-block w-100" alt="..." />
					<div className="carousel-title">
						<h1 className="display-5">Texto informativo</h1>
					</div>
			    </div>	
			    <div className="carousel-item">
				    <img src="https://images2-mega.cdn.mdstrm.com/meganoticias/2022/03/08/deficit-atencional-adultos_370109_1_622791bb651c5.jpg?d=950x535" className="d-block w-100" alt="..." />
					<div className="carousel-title">
						<h1 className="display-5">Texto informativo</h1>
					</div>			    
				</div>	
			    <div className="carousel-item">
				    <img src="https://bodynbrainbucket.s3.amazonaws.com/uploads/newsimage/CenterNews/BNB_Generic/colored-brain.jpg" className="d-block w-100" alt="..." />
			    	<div className="carousel-title">
						<h1 className="display-5 text-dark">Texto informativo</h1>
					</div>
				</div>			
		    </div>
         </div>   
    )
};
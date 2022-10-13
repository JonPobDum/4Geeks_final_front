import React from "react";


export const Carousel_home = () => {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide d-none d-sm-block" data-bs-ride="carousel">
		    <div className="carousel-inner">
			    <div className="carousel-item active">
				    <img src="https://static.timesofisrael.com/www/uploads/2022/04/iStock-1325376146.jpg" className="d-block w-100" alt="..." />
			    </div>	
			    <div className="carousel-item">
				    <img src="https://thumbs.dreamstime.com/b/manager-looking-to-wall-overloaded-brain-concept-angry-drawn-147071980.jpg" className="d-block w-100" alt="..." />
			    </div>	
			    <div className="carousel-item">
				    <img src="https://bodynbrainbucket.s3.amazonaws.com/uploads/newsimage/CenterNews/BNB_Generic/colored-brain.jpg" className="d-block w-100" alt="..." />
			    </div>			
		    </div>
         </div>   
    )
};
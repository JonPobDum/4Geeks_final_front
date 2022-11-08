import React,{useEffect,useContext} from "react";
import { Link } from "react-router-dom";
// import "../../styles/navbar.css";

export const Navbar = () => {

	return (


		<nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="#">Navbar</a> */}
	<Link to="/">
	<img src="https://imagizer.imageshack.com/img924/9654/35j7ZL.png" width="30" height="30" classNameName="" />
	</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
		<Link to="/login">
          <a className="nav-link active" aria-current="page" href="#">Login</a>
		  </Link>
        </li>
        <li className="nav-item">
		<Link to="/carousel">
          <a className="nav-link active" href="#">Choose your Activity</a>
		  </Link>
        </li>
        <li className="nav-item">
		<Link to="/perfil">
          <a className="nav-link active" href="#">Profile</a>
		  </Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
		// <nav classNameName="navbar nav_estilo navbar-expand-lg navbar-light bg-dark">
		// 	<div classNameName="container-fluid">
				
		// 		<button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      	// 			<span classNameName="navbar-toggler-icon"></span>
    	// 		</button>
		// 		<div classNameName="collapse navbar-collapse" id="navbarNav">
		// 			<ul classNameName="navbar-nav">
		// 			<li classNameName="nav-item">
		// 					<Link to="/">
		// 						<div classNameName="navbar-brand">
		// 							<img src="https://imagizer.imageshack.com/img924/9654/35j7ZL.png" width="30" height="30" classNameName="" />
		// 							{/* <button className="no-border btn btn-outline-light ms-2 m120" type="button">Home</button> */}
		// 						</div>
		// 					</Link>
		// 				</li>
		// 				<li classNameName="nav-item">
		// 					<Link to="/login">
		// 						<button className="btn btn-outline-light no-border me-2 m120 m-top" type="button">Login</button>
								
		// 					</Link>
		// 				</li>
						
		// 				<li classNameName="nav-item">
		// 					<Link to="/carousel">
		// 						<button className="btn btn-outline-light no-border me-2 m240 m-top" type="button">Choose your Activity</button>
		// 					</Link>
		// 				</li>
					
		// 				<li classNameName="nav-item">
		// 					<Link to="/perfil">
		// 						<button className="btn btn-outline-light no-border me-2 m120 m-top" type="button">Profile</button>	
		// 					</Link>
		// 				</li>

		// 			</ul>
		// 		</div>	
		// 	</div>	
		// </nav>
	);
};
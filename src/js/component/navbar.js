import React,{useEffect,useContext} from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {

	return (
		<nav className="navbar nav_estilo navbar-expand-lg navbar-light bg-dark">
			<div className="container-fluid">
				
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      				<span className="navbar-toggler-icon"></span>
    			</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
					<li className="nav-item">
							<Link to="/">
								<div className="navbar-brand">
									<img src="https://imagizer.imageshack.com/img924/9654/35j7ZL.png" width="30" height="30" className="" />
									{/* <button class="no-border btn btn-outline-light ms-2 m120" type="button">Home</button> */}
								</div>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/login">
								<button class="btn btn-outline-light no-border me-2 m120 m-top" type="button">Login</button>
								
							</Link>
						</li>
						
						<li className="nav-item">
							<Link to="/carousel">
								<button class="btn btn-outline-light no-border me-2 m240 m-top" type="button">Choose your Activity</button>
							</Link>
						</li>
					
						<li className="nav-item">
							<Link to="/perfil">
								<button class="btn btn-outline-light no-border me-2 m120 m-top" type="button">Profile</button>	
							</Link>
						</li>

					</ul>
				</div>	
			</div>	
		</nav>
	);
};
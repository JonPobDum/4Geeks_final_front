import React from "react";
import { Link } from "react-router-dom";
import logoimagen from "../../img/logo.jpg"
import "../../styles/navbar.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-dark row">
			<div className="container-fluid col-3 ms-5">
				<Link to="/">
					<div className="navbar-brand">
      					<img src={logoimagen} width="30" height="24" className="d-inline-block align-text-top" />
						<a className="ms-5">Brain Manager</a>
    				</div>
				</Link>
			</div>	
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      				<span className="navbar-toggler-icon"></span>
    			</button>
				<div className="collapse navbar-collapse col-3" id="navbarNav">
					<a className="nav-link" aria-current="page" href="#">Pomodoro</a>
					<a className="nav-link" aria-current="page" href="#">Agenda</a>
					<a className="nav-link" aria-current="page" href="#">Reproductor</a>
				</div>	
			<form className="container-fluid justify-content-center col-3" id="navbarNav">
   					<button className="btn btn-outline-danger me-2" type="button">Login</button>
					<button className="btn btn-outline-secondary me-2" type="button">Register</button>
  			</form>
		</nav>
	);
};

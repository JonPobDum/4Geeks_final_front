import React from "react";
import { Link } from "react-router-dom";
import logoimagen from "../../img/logo.jpg"

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<Link to="/">
					<div className="navbar-brand">
      					<img src={logoimagen} width="30" height="24" className="d-inline-block align-text-top" />
						<a className="ms-3">App</a>
    				</div>
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      				<span className="navbar-toggler-icon"></span>
    			</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page">Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active">Login</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active">Tareas</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active">Pomodoro</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active">Planner</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active">Reproductor</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active">Cuaderno de animo</a>
						</li>
					</ul>
				</div>	
			</div>	
		</nav>
	);
};

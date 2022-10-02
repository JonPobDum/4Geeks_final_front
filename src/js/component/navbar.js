import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 ms-3">Brain Manager</span>
			</Link>
			<div className="ml-auto position-absolute start-50 translate-middle-x">
				<Link to="/demo">
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      				<span className="navbar-toggler-icon"></span>
    			</button>
				<div className="collapse navbar-collapse" id="navbarNav">
    			  <ul className="navbar-nav">
        			<li className="nav-item">
          				<a className="nav-link active" aria-current="page" href="#">Home</a>
        			</li>
        			<li className="nav-item">
          				<a className="nav-link" href="#">Login</a>
        			</li>
        			<li className="nav-item">
          				<a className="nav-link" href="#">Tareas</a>
        			</li>
        			<li className="nav-item">
          				<a className="nav-link">Pomodoro</a>
        			</li>
        			<li className="nav-item">
          				<a className="nav-link">Planner</a>
        			</li>
					<li className="nav-item">
          				<a className="nav-link">Reproductor</a>
        			</li>
					<li className="nav-item">
          				<a className="nav-link">Cuaderno de animo</a>
        			</li>
      			</ul>
    		</div>	
				</Link>
			</div>
		</nav>
	);
};

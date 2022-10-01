import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 mx-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Brain Manager</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary mx-3">Menú</button>
				</Link>
			</div>
		</nav>
	);
};

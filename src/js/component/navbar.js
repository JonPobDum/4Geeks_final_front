import React,{useEffect,useContext} from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import logoimagen from "../../img/logo.jpg"

export const Navbar = () => {

	// const  history = useHistory();

    // useEffect(()=>{
        
    //     if(localStorage.getItem("Token")){
    //       alert("welcome")
    //       }
    //   else{
    //       history.push("/")
    //   }
        
    //   },[])
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
						{/* <li className="nav-item">
							<a className="nav-link active" aria-current="page">Home</a>
						</li> */}
						<li className="nav-item">
						<Link to="/login">
							<a className="nav-link active">Login</a>
						</Link>
						</li>
						<li className="nav-item">
						<Link to="/pomodoro">
							<a className="nav-link active">Timer</a>
						</Link>
						
						</li>
						<li className="nav-item">
						<Link to="/carousel">
							<a className="nav-link active">carousel</a>
						</Link>
						</li>
						<li className="nav-item">
						<Link to="/todolist">
							<a className="nav-link active">TodoList</a>
						</Link>
						</li>
						<li className="nav-item">
						<Link to="/perfil">
							<a className="nav-link active">profile</a>
						</Link>
						{/* <Link to="/">
							<a className="nav-link active">Cuaderno de animo</a>
						</Link> */}
						</li>
						<li className="nav-item">
						
						</li>
						
					</ul>
				</div>	
			</div>	
		</nav>
	);
};

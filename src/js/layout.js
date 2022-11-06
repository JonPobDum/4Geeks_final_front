import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./views/home";
import { Register } from "./views/register";
import { Login } from "./views/login";
import { Perfil } from "./views/perfil";
import { Agenda } from "./views/agenda";
import { Slideshow } from "./views/carousel";

import { Single } from "./views/single";
import { App } from "../js/component/circle_pomodoro_timer/App01.js";
import { Applayer } from "./views/playermode.js";

import injectContext from "./store/appContext";
import ScrollToTop from "./component/scrollToTop";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import {Forgotpassword} from "./component/fogot_password"

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/register">
							<Register />
						</Route>
						<Route exact path="/carousel">
							<Slideshow />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/perfil">
							<Perfil />
						</Route>
						<Route exact path="/forgot_password">
							<Forgotpassword />
						</Route>

						<Route exact path="/pomodoro">
							<App />
						</Route>

						<Route exact path="/todolist">
							<Agenda />
						</Route>

						<Route exact path="/playermode">
							<Applayer />
						</Route>	
						
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route>
							<img src="https://imagizer.imageshack.com/img922/9083/UfH47l.png" className="rounded mx-auto d-block"/>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

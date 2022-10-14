import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Login } from "./views/login";
import { Register} from "./views/register";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { Slideshow } from "./views/carousel";
import { Applayer } from "./views/playermode";
import { Audiowaves } from "./views/waves"
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Carousel } from "./component/carousel";
import { Player } from "./component/player";
import { Waveanimation } from "./component/wavesanimation";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="bg-black">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					{/* <Carousel /> */}
					{/* <Applayer /> */}
					<Footer />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>

						<Route exact path="/carousel">
							<Slideshow />
						</Route>

						<Route exact path="/playermode">
							<Applayer />
						</Route>

						<Route exact path="/waves">
							<Audiowaves />
						</Route>

						Audiowaves
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/register">
							<Register />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>

						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

import React from "react";
import "../../styles/home.css";
import { Carousel_home } from "../component/home_component/carousel_home";
import { Pomodoro } from "../component/home_component/pomodoro_home";
import { Testimonios } from "../component/home_component/testimonios_home";
import { Todo_list } from "../component/home_component/todolist_home";
// import imageresponsive from "../../img/";

export const Home = () => (
	<>
		<Carousel_home />
		<Testimonios />
		<Pomodoro />
		<Todo_list />
	</>
);

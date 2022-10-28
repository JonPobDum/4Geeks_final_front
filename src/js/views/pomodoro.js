import React, { useState, useEffect } from 'react';
import "../../styles/pomodoro.css";
import { Applayer } from "../views/playermode"
import { Link, useParams, useHistory } from "react-router-dom";


export function Pomodoro () {
	const [minutes, setMinutes] = useState(25);
	const [seconds, setSeconds] = useState(0);
	const [displayMessage, setDisplayMessage] = useState(false);

	const  history = useHistory();


	useEffect(() => {

	//  PARA NO MOSTRAR LA VISTA AL MENOS QUE TENGAS TOKEN	

    //     if(localStorage.getItem("token")){
    //         history.push("/pomodoro")
    //       }
    //   else{
    //       history.push("/")
    //   }


		let interval = setInterval(() => {
			clearInterval(interval);

			if (seconds === 0 ) {
				if (minutes !== 0) {
					setSeconds(59);
					setMinutes(minutes - 1);
				} else {
					let minutes = displayMessage ? 24 : 4;
					let seconds = 59;

					setSeconds(seconds);
					setMinutes(minutes);
					setDisplayMessage(!displayMessage);
				}
			} else {
			setSeconds(seconds - 1);
			}
		}, 1000)
	}, [seconds]);

	const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
	const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;  
	


	return <div className='pomodoro m-3 sm-3 md-6 lg-9 xl-12'>
				<div className='timer m-3 sm-3 md-6 lg-9 xl-12'> {timerMinutes}:{timerSeconds} </div>
				
				<div className='message m-3'>
					{displayMessage && <div className='message m-3'><h5>Bien hecho! tómate un descanso.</h5></div>}
				</div> 
				<div><br/>
				</div>
				<div>
				<Applayer />
				</div>
			</div>
}
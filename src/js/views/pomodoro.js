import React, {useState, useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/pomodoro.css";

export function Pomodoro () {
	const [minuto, setMinuto] = useState(25)
	const [segundo, setSegundo] = useState(0)
	const [displayMsg, setDisplayMsg] = useState(false);

	useEffect (() => {
		let interval = setInterval(()=> {
			clearInterval(interval);

			if (segundo === 0) {
				if (minuto !== 0){
					setSegundo(59);
					setMinuto(minuto - 1);
				} else{
					let minuto = displayMsg ? 24 : 4;
					let segundo = 59;

					setSegundo (segundo);
					setMinuto (minuto);
					setDisplayMsg(!displayMsg)
				}
			} else {
				setSegundo (segundo - 1);
			}
		}, 1000)
	}, [segundo])

	const timerMinuto = minuto < 10 ? `0${minuto}` : minuto;
	const timerSegundo = segundo < 10 ? `0${segundo}` : segundo;

	return <div className="pomodoro m-2">
		<div className="message">
			{displayMsg && <div>Break! Vuelve a trabajar en:</div>}
		</div>
		<br></br>
		<div className="timer m-2">
			{timerMinuto}:{timerSegundo}</div>
	</div>;

}

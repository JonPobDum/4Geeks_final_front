import React, { useState } from 'react';
import { useInterval } from 'react-interval-hook';
import "../../styles/pomodoro.css";

export function Pomodoro () {
	const { start, stop, isActive } = useInterval(
			() => {
				console.log('Callback every 1000 ms');
			},
			1000,
			{
				autoStart: false,
				immediate: false,
				selfCorrecting: false,
				onFinish: () => {
					console.log('Callback when timer is stopped');
				},
			}
		);
		const [active, setActive] = useState(isActive());
		const [triggerFinishCallback, setTriggerFinishCallback] = useState(true);
	
		return (
			<div>
				<button type="button" onClick={start} id="start">
					Start
				</button>
				<button type="button" onClick={() => stop(triggerFinishCallback)} id="stop">
					Stop
				</button>
				<button type="button" onClick={() => setActive(isActive())} id="checkActive">
					Check active
				</button>
				<div id="active">Active: {active ? 1 : 0}</div>
				<div>
					<label htmlFor="trigger-finish-callback">
						<input
							id="trigger-finish-callback"
							type="checkbox"
							defaultChecked={triggerFinishCallback}
							onChange={() => setTriggerFinishCallback(current => !current)}
						/>
						Trigger finish callback
					</label>
				</div>
			</div>
		);
	};


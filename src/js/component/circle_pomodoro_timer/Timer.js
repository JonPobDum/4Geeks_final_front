//componente de js del timer from react
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
//componente de style del timer from react
import 'react-circular-progressbar/dist/styles.css'; 
import PlayButton from "./PlayButton";
import PauseButton from "../circle_pomodoro_timer/PauseButton";
import SettingsButton from "./SettingsButton";
import {useContext, useState, useEffect, useRef} from "react";
import SettingsContext from "./SettingsContext";
import React from 'react';

const red = '#f54e4e';
const green = '#4aec8c';

function Timer() {
  const settingsInfo = useContext(SettingsContext);

  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState('work'); // work/break/null
  const [secondsLeft, setSecondsLeft] = useState(0);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);
  const music = new Audio ("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3")

  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  useEffect(() => {

    function switchMode() {
      const nextMode = modeRef.current === 'work' ? 'break' : 'work';
      const nextSeconds = (nextMode === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60;

      setMode(nextMode);
      modeRef.current = nextMode;

      setSecondsLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds;
    }

    secondsLeftRef.current = settingsInfo.workMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }

      tick();
    },1000);

    return () => clearInterval(interval);
  }, [settingsInfo]);

  const totalSeconds = mode === 'work'
    ? settingsInfo.workMinutes * 60
    : settingsInfo.breakMinutes * 60;
  const percentage = Math.round(secondsLeft / totalSeconds * 100);

  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if(seconds < 10) seconds = '0'+seconds;

  return (
    <div className='timerdiv col-xl-3 col-md-9 col-sm-12 align-items-center p-5'>
    {/* Componente de barra circular */}
      <CircularProgressbar
        value={percentage}
        text={minutes + ':' + seconds}
        styles={buildStyles({
        //Color del porcentaje dentro del circulo
        textColor:'#fff', 
        //Color del recorrido del circulo
        pathColor:mode === 'work' ? red : green,
        //Color del progreso del circulo
        tailColor:'rgba(255,255,255,.2)',
      })} className="ms-4"/>

      {/* Posicionamiento del Boton Timer */}
      <div style={{marginTop:'20px'}}>
        {isPaused
        // Componente de botón de Play con ternario
        ? <PlayButton onClick={() => { setIsPaused(false); isPausedRef.current = false; }} /> //music.play();
        // Componente de botón de Pause
          : <PauseButton onClick={() => { setIsPaused(true); isPausedRef.current = true; }} />} 
      </div>


      {/* Componente de botón de Settings */}
      {/* Posicionamiento del Boton de Settings */}
      <div style={{marginTop:'20px'}} className="">
        <SettingsButton   onClick={() => settingsInfo.setShowSettings(true)} />
      </div>
    </div>
  );
}

export default Timer;
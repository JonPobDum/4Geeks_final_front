import Timer from "./Timer";
import Settings from "../circle_pomodoro_timer/Settings";
import {useState} from "react";
import React from 'react';
import SettingsContext from "./SettingsContext";
import '../../../styles/App01.css';


export function App() {
    
    // Declarar los UseState para mostrar o Minutos de Trabajo/Descanzo ó el Timer
    // Este es el Usestate inicial el Setting
  const [showSettings, setShowSettings] = useState(false);
    // Este es el UseState para poder deslizar el boton de Work time, en los sliders empezando con un default de 45 minutos
  const [workMinutes, setWorkMinutes] = useState(25);
  // Este es el UseState para poder deslizar el boton de Rest time en los sliders empezando con un default de 15 minutos
  const [breakMinutes, setBreakMinutes] = useState(10);

  return ( 
  
  <div className='App01'>
                  <div className='main'>
                        <SettingsContext.Provider value={{
                          // El UseState para llamar a la funcion de Settings
                          showSettings,
                          // El UseState mostrar el componente de Settings
                          setShowSettings,
                          // El UseState para llamar a la funcion de workMinutes
                          workMinutes,
                          // El UseState para llamar a la funcion de breakMinutes
                          breakMinutes,
                          // El UseState mostrar el componente del Timer de trabajo
                          setWorkMinutes,
                          // El UseState mostrar el componente del Timer de descanzo
                          setBreakMinutes,
                        }}>
                          {/* Ternario de si muestra Settings o de lo contrario muestra el Timer */}
                          {showSettings ? <Settings /> : <Timer />}
                        </SettingsContext.Provider>
                    </div>
  </div>
  );
}
import ReactSlider from 'react-slider';
import '../../../styles/slider.css'
import SettingsContext from "./SettingsContext";
import BackButton from "../circle_pomodoro_timer/BackButton.js";
import React, {useContext} from 'react';

// ATENCION: hay que instalar los componentes de controles deslizables con: yarn add react-slider
function Settings() {
    // Esta constante se usa para pasar los valores de los sliders al javascript de App.js
  const settingsInfo = useContext(SettingsContext);
  return(
    // Estilos para posicionar los Settings de Work/BreaK
    <div style={{textAlign:'left'}} className="position-relative gap-4">
      {/* Titulo de controles de trabajo */}
       {/* el :00 es para mostrar que son minutos exactos */}
      <label>work: {settingsInfo.workMinutes}:00</label>
      {/* detalles del componenete Slider */}
      <ReactSlider
        className={'slider position-absolute top-20 start-50 translate-middle'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        // variable que recoge el valor de los minutos de trabajo
        value={settingsInfo.workMinutes}
        // funcionalidad para poder deslizar el boton en los slider y que lo tome la funcion del contador
        onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
        // minimo valor de trabajo
        min={25}
         // máximo valor de trabajo
        max={50}
      />
      {/* Titulo de controles de descanzo */}
      {/* el :00 es para mostrar que son minutos exactos */}
      <label>break: {settingsInfo.breakMinutes}:00</label>
      <ReactSlider
        // clase para el boton de descanzo
        className={'slider green position-absolute top-40 start-50 translate-middle'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        // variable que recoge el valor de los minutos de descanzo
        value={settingsInfo.breakMinutes}
        onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
        // minimo valor de descanzo
        min={5}
        // clase para el boton de descanzo
        max={20}
      />
      <div style={{textAlign:'center', marginTop:'20px'}}>
        <BackButton onClick={() => settingsInfo.setShowSettings(false)} />
      </div>
    </div>
  );
}

export default Settings;
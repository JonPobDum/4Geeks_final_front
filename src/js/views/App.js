import React, { useEffect, useContext } from "react";
import Button from "../component/Buttons";
import CountdownAnimation from "../component/CountdownAnimation";
import SetPomodoro from "../component/SetPomodoro";
import { SettingsContext } from "../component/context/SettingsContext";
import '../../styles/App.css';
import '../../styles/index.css';

const App = () => {
  const {
    pomodoro,
    executing,
    startAnimate,
    children,
    startTimer,
    pauseTimer,
    updateExecute,
    setCurrentTimer,
    SettingsBtn,
  } = useContext(SettingsContext);

  useEffect(() => {
    updateExecute(executing);
  }, [executing, startAnimate]);

  return (
    <div className="container">
      <div className="container-box">
      <h1>Pomodoro</h1>
      <strong>Be productive the right way.</strong>
      {pomodoro == 0 ? (
        <SetPomodoro />
      ) : (
        <div>
          <ul className="labels">
            <li>
              <Button
                title="Work"
                activeClass={
                  executing.active === "work" ? "active-label" : undefined
                }
                _callback={() => setCurrentTimer("work")}
              />
            </li>
            <li>
              <Button
                title="Short Break"
                activeClass={
                  executing.active === "short" ? "active-label" : undefined
                }
                _callback={() => setCurrentTimer("short")}
              />
            </li>
            <li>
              <Button
                title="Long Break"
                activeClass={
                  executing.active === "long" ? "active-label" : undefined
                }
                _callback={() => setCurrentTimer("long")}
              />
            </li>
          </ul>
          <Button title="Settings" _callback={SettingsBtn} />
          <div className="timer-container">
            <div className="time-wrapper">
              <CountdownAnimation
                key={pomodoro}
                timer={pomodoro}
                animate={startAnimate}
              >
                {children}
              </CountdownAnimation>
            </div>
          </div>
          <div className="button-wrapper">
            <Button
              title="Start"
              activeClass={!startAnimate ? "active" : undefined}
              _callback={startTimer}
            />
            <Button
              title="Pause"
              activeClass={startAnimate ? "active" : undefined}
              _callback={pauseTimer}
            />
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default App;
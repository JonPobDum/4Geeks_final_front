import React from "react";
import { useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { SettingsContext } from "../component/context/SettingsContext";
import '../../styles/App.css';
import '../../styles/index.css';

const CountdownAnimation = ({ key, timer, animate, children }) => {
  const { stopAimate } = useContext(SettingsContext);

  return (
    <CountdownCircleTimer
      key={key}
      isPlaying={animate}
      duration={timer * 60}
      colors={[
        ["#f3f3f3", 0.33],
        ["#fff", 0.33],
        ["#fff", 0.33],
      ]}
      strokeWidth={8}
      size={260}
      trailColor="#514644"
      onComplete={() => {
        stopAimate();
      }}
    >
      {children}
    </CountdownCircleTimer>
  );
};

export default CountdownAnimation;
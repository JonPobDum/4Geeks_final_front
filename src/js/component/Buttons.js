import React from "react";
import '../../styles/App.css';
import '../../styles/index.css';

const Button = ({ title, activeClass, _callback }) => {
  return (
    <button className={activeClass} onClick={_callback}>
      {title}
    </button>
  );
};
export default Button;
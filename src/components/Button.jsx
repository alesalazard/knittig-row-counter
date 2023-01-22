import React from 'react';
import '../styles/Button.css';

const Button = ({isAdd, clickHandler, text }) => {
  return (
    <button
      className={isAdd ? 'add-row' : 'reset-row'}
      onClick={clickHandler}>
      {text}
    </button>
  );
};
export default Button;
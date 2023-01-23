import React from "react";
import '../styles/Counter.css';

const Counter = ({clickNum})=> {
  return (
    <div className="counter">
        {clickNum}
    </div>
  )
}
export default Counter;

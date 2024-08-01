import { useState } from 'react';
import './Box.css'

const Box = () => {
  const [color, setColor] = useState('true');
  const changeColor = () => {
    setColor(!color)
  }
  return (
    <div id="box" className={color ? "red": "blue"} onClick={changeColor}>
      {color ? (
        <p>Red</p>
      )  : (
        <span>
          <p>Blue - hover over box for red; </p>
          <p>Hover over box for red; </p>
          <p>Click the change to red when not hovering</p>

        </span>
      )}
    </div>
  );
}

export default Box;

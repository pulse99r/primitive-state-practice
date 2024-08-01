import { useState } from "react";

const Box = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div
      onClick={handleClick}
      className={`box ${clicked ? "red" : "blue"}`}
    ></div>
  );
};

export default Box;

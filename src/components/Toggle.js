import React, { useState } from "react";


 export function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    setIsOn((isOn) => !isOn);
  }

  const color = isOn ? "pink" : "yellow";

  return (
    <button style={{ background: color }} onClick={handleClick}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

// function Toggle() {
//   const [isOn, setIsOn] = useState(false);
//   console.log({ isOn, setIsOn })

//   function handleClick() {
//     setIsOn(!isOn)
//   }

//   return <button onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>;
// }
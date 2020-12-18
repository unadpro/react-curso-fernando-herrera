import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ valor }) => {
  //const state = useState();
  const [counter, setCounter] = useState(valor);

  //handleAdd
  const handleAdd = () => {
    //setCounter(counter + 1);
    setCounter((c) => c + 1);
  };

  const handleSubstract = () => {
    setCounter((c) => c - 1);
  };

  const handleReset = () => {
    setCounter((c) => valor);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      <button onClick={handleAdd}>+1</button>
      <button onClick = {handleSubstract}>-1</button>
      <button onClick = {handleReset}>R</button>
    </>
  );
};

CounterApp.propTypes = {
  valor: PropTypes.number.isRequired,
};

export default CounterApp;

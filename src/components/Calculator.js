/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect } from 'react';
import '../styles/calculator.css';
import CalculatorButton from './CalculatorButton';
import calculate from '../logic/calculate';
import Display from './CalculatorDisplay';
// As required for this project, components will be defined class based

function Calculator() {
  const [calculatorObj, setCalculatorObj] = useState({});

  useEffect(() => setCalculatorObj({}));

  function calculateHandler(buttonName) {
    setCalculatorObj(() => calculate(calculatorObj, buttonName));
  }

  return (
    <div className="calculator-container">
      <Display
        total={calculatorObj.total}
        next={calculatorObj.next}
        operation={calculatorObj.operation}
      />
      <div className="calculator-buttons">
        <CalculatorButton value="AC" calculateHandler={calculateHandler} />
        <CalculatorButton value="+/-" calculateHandler={calculateHandler} />
        <CalculatorButton value="%" calculateHandler={calculateHandler} />
        <CalculatorButton value="÷" calculateHandler={calculateHandler} isSign />
        <CalculatorButton value="7" calculateHandler={calculateHandler} />
        <CalculatorButton value="8" calculateHandler={calculateHandler} />
        <CalculatorButton value="9" calculateHandler={calculateHandler} />
        <CalculatorButton value="x" calculateHandler={calculateHandler} isSign />
        <CalculatorButton value="4" calculateHandler={calculateHandler} />
        <CalculatorButton value="5" calculateHandler={calculateHandler} />
        <CalculatorButton value="6" calculateHandler={calculateHandler} />
        <CalculatorButton value="-" calculateHandler={calculateHandler} isSign />
        <CalculatorButton value="1" calculateHandler={calculateHandler} />
        <CalculatorButton value="2" calculateHandler={calculateHandler} />
        <CalculatorButton value="3" calculateHandler={calculateHandler} />
        <CalculatorButton value="+" calculateHandler={calculateHandler} isSign />
        <CalculatorButton value="0" calculateHandler={calculateHandler} />
        <CalculatorButton value="." calculateHandler={calculateHandler} />
        <CalculatorButton value="=" calculateHandler={calculateHandler} isSign />
      </div>
    </div>
  );
}

export default Calculator;

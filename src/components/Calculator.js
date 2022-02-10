import React, { useState, useEffect } from 'react';
import '../styles/calculator.css';
import CalculatorButton from './CalculatorButton';
import Display from './CalculatorDisplay';

const Calculator = () => {
  const [calculatorObj, setCalculatorObj] = useState({});

  useEffect(() => setCalculatorObj({}), []);

  return (
    <div className="calculator-container">
      <Display
        total={calculatorObj.total}
        next={calculatorObj.next}
        operation={calculatorObj.operation}
      />
      <div className="calculator-buttons">
        <CalculatorButton value="AC" calculateHandler={setCalculatorObj} calculatorObj={calculatorObj} />
        <CalculatorButton value="+/-" calculateHandler={setCalculatorObj} calculatorObj={calculatorObj} />
        <CalculatorButton value="%" calculateHandler={setCalculatorObj} calculatorObj={calculatorObj} />
        <CalculatorButton value="÷" calculateHandler={setCalculatorObj} calculatorObj={calculatorObj} isSign />
        <CalculatorButton value="7" calculateHandler={setCalculatorObj} calculatorObj={calculatorObj} />
        <CalculatorButton value="8" calculateHandler={setCalculatorObj} calculatorObj={calculatorObj} />
        <CalculatorButton value="9" calculateHandler={setCalculatorObj} calculatorObj={calculatorObj} />
        <CalculatorButton value="x" calculateHandler={setCalculatorObj} calculatorObj={calculatorObj} isSign />
        <CalculatorButton value="4" calculateHandler={setCalculatorObj} calculatorObj={calculatorObj} />
        <CalculatorButton value="5" calculateHandler={setCalculatorObj} calculatorObj={calculatorObj} />
        <CalculatorButton value="6" calculateHandler={setCalculatorObj} calculatorObj={calculatorObj} />
        <CalculatorButton value="-" calculateHandler={setCalculatorObj} calculatorObj={calculatorObj} isSign />
        <CalculatorButton value="1" calculateHandler={setCalculatorObj} calculatorObj={calculatorObj} />
        <CalculatorButton value="2" calculateHandler={setCalculatorObj} calculatorObj={calculatorObj} />
        <CalculatorButton value="3" calculateHandler={setCalculatorObj} calculatorObj={calculatorObj} />
        <CalculatorButton value="+" calculateHandler={setCalculatorObj} calculatorObj={calculatorObj} isSign />
        <CalculatorButton value="0" calculateHandler={setCalculatorObj} calculatorObj={calculatorObj} />
        <CalculatorButton value="." calculateHandler={setCalculatorObj} calculatorObj={calculatorObj} />
        <CalculatorButton value="=" calculateHandler={setCalculatorObj} calculatorObj={calculatorObj} isSign />
      </div>
    </div>
  );
};

export default Calculator;

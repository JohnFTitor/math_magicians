import React from 'react';
import '../styles/calculator.css';
import CalculatorButton from './CalculatorButton';
// As required for this project, components will be defined class based

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator-container">
        <input placeholder="0" disabled />
        <div className="calculator-buttons">
          <CalculatorButton value="AC" />
          <CalculatorButton value="+/-" />
          <CalculatorButton value="%" />
          <CalculatorButton value={'\u00F7'} isSign />
          <CalculatorButton value="7" />
          <CalculatorButton value="8" />
          <CalculatorButton value="9" />
          <CalculatorButton value="x" isSign />
          <CalculatorButton value="4" />
          <CalculatorButton value="5" />
          <CalculatorButton value="6" />
          <CalculatorButton value="-" isSign />
          <CalculatorButton value="1" />
          <CalculatorButton value="2" />
          <CalculatorButton value="3" />
          <CalculatorButton value="+" isSign />
          <CalculatorButton value="0" />
          <CalculatorButton value="." />
          <CalculatorButton value="=" isSign />
        </div>
      </div>
    );
  }
}

export default Calculator;

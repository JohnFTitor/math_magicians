import React from 'react';
import '../styles/calculator.css';
import CalculatorButton from './CalculatorButton';
import calculate from '../logic/calculate';
import Display from './CalculatorDisplay';
// As required for this project, components will be defined class based

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calculatorObj: {},
    };
    this.calculateHandler = this.calculateHandler.bind(this);
  }

  calculateHandler(buttonName) {
    this.setState((previousState) => ({
      calculatorObj: calculate(previousState.calculatorObj, buttonName),
    }));
  }

  render() {
    const { calculatorObj } = this.state;
    return (
      <div className="calculator-container">
        <Display
          total={calculatorObj.total}
          next={calculatorObj.next}
          operation={calculatorObj.operation}
        />
        <div className="calculator-buttons">
          <CalculatorButton value="AC" calculateHandler={this.calculateHandler} />
          <CalculatorButton value="+/-" calculateHandler={this.calculateHandler} />
          <CalculatorButton value="%" calculateHandler={this.calculateHandler} />
          <CalculatorButton value="÷" calculateHandler={this.calculateHandler} isSign />
          <CalculatorButton value="7" calculateHandler={this.calculateHandler} />
          <CalculatorButton value="8" calculateHandler={this.calculateHandler} />
          <CalculatorButton value="9" calculateHandler={this.calculateHandler} />
          <CalculatorButton value="x" calculateHandler={this.calculateHandler} isSign />
          <CalculatorButton value="4" calculateHandler={this.calculateHandler} />
          <CalculatorButton value="5" calculateHandler={this.calculateHandler} />
          <CalculatorButton value="6" calculateHandler={this.calculateHandler} />
          <CalculatorButton value="-" calculateHandler={this.calculateHandler} isSign />
          <CalculatorButton value="1" calculateHandler={this.calculateHandler} />
          <CalculatorButton value="2" calculateHandler={this.calculateHandler} />
          <CalculatorButton value="3" calculateHandler={this.calculateHandler} />
          <CalculatorButton value="+" calculateHandler={this.calculateHandler} isSign />
          <CalculatorButton value="0" calculateHandler={this.calculateHandler} />
          <CalculatorButton value="." calculateHandler={this.calculateHandler} />
          <CalculatorButton value="=" calculateHandler={this.calculateHandler} isSign />
        </div>
      </div>
    );
  }
}

export default Calculator;

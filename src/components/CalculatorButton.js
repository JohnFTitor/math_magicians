import React from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

const CalculatorButton = ({
  value,
  isSign,
  calculateHandler,
  calculatorObj,
}) => {
  const buttonCalculateHandler = () => {
    calculateHandler(() => calculate(calculatorObj, value));
  };

  if (value === '0') {
    return <button type="button" className="calculator-button zero-button" onClick={buttonCalculateHandler}>{value}</button>;
  }
  if (isSign) {
    return <button type="button" className="calculator-button sign-button" onClick={buttonCalculateHandler}>{value}</button>;
  }
  return <button type="button" className="calculator-button" onClick={buttonCalculateHandler}>{value}</button>;
};

CalculatorButton.defaultProps = {
  isSign: false,
};

CalculatorButton.propTypes = {
  value: PropTypes.string.isRequired,
  isSign: PropTypes.bool,
  calculateHandler: PropTypes.func.isRequired,
  calculatorObj: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default CalculatorButton;

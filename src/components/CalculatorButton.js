import React from 'react';

import PropTypes from 'prop-types';

// As required for this project, components will be defined class based

function CalculatorButton({ value, isSign, calculateHandler }) {
  function buttonCalculateHandler() {
    calculateHandler(value);
  }

  if (value === '0') {
    return <button type="button" className="calculator-button zero-button" onClick={buttonCalculateHandler}>{value}</button>;
  }
  if (isSign) {
    return <button type="button" className="calculator-button sign-button" onClick={buttonCalculateHandler}>{value}</button>;
  }
  return <button type="button" className="calculator-button" onClick={buttonCalculateHandler}>{value}</button>;
}

CalculatorButton.defaultProps = {
  isSign: false,
};

CalculatorButton.propTypes = {
  value: PropTypes.string.isRequired,
  isSign: PropTypes.bool,
  calculateHandler: PropTypes.func.isRequired,
};

export default CalculatorButton;

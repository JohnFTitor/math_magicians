import React from 'react';

import PropTypes from 'prop-types';

// As required for this project, components will be defined class based

class CalculatorButton extends React.Component {
  constructor(props) {
    super(props);
    this.calculateHandler = this.calculateHandler.bind(this);
  }

  calculateHandler() {
    const { calculateHandler, value } = this.props;
    calculateHandler(value);
  }

  render() {
    const { value, isSign } = this.props;
    if (value === '0') {
      return <button type="button" className="calculator-button zero-button" onClick={this.calculateHandler}>{value}</button>;
    }
    if (isSign) {
      return <button type="button" className="calculator-button sign-button" onClick={this.calculateHandler}>{value}</button>;
    }
    return <button type="button" className="calculator-button" onClick={this.calculateHandler}>{value}</button>;
  }
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

import React from 'react';

import PropTypes from 'prop-types';

// As required for this project, components will be defined class based
// eslint-disable-next-line react/prefer-stateless-function
class CalculatorButton extends React.Component {
  render() {
    const { value, isSign } = this.props;
    if (value === '0') {
      return <button type="button" className="calculator-button zero-button">{value}</button>;
    }
    if (isSign) {
      return <button type="button" className="calculator-button sign-button">{value}</button>;
    }
    return <button type="button" className="calculator-button">{value}</button>;
  }
}

CalculatorButton.defaultProps = {
  isSign: false,
};

CalculatorButton.propTypes = {
  value: PropTypes.string.isRequired,
  isSign: PropTypes.bool,
};

export default CalculatorButton;

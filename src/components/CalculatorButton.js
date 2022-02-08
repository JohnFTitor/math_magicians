import React from 'react';

import PropTypes from 'prop-types';

// As required for this project, components will be defined class based
// eslint-disable-next-line react/prefer-stateless-function
class CalculatorButton extends React.Component {
  render() {
    const { value } = this.props;
    if (value === '0') {
      return <button type="button" className="calculator-button zero-button">{value}</button>;
    }
    return <button type="button" className="calculator-button">{value}</button>;
  }
}

CalculatorButton.propTypes = {
  value: PropTypes.string.isRequired,
};

export default CalculatorButton;

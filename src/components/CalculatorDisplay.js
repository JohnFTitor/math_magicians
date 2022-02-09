import React from 'react';

import PropTypes from 'prop-types';

// As required for this project, components will be defined class based

// eslint-disable-next-line react/prefer-stateless-function
class Display extends React.Component {
  render() {
    const { total, next, operation } = this.props;

    if (!next && !total) {
      return (
        <div className="display">
          <span className="previusOperation"> 0 </span>
          <p> 0 </p>
        </div>
      );
    }
    if (!next) {
      return (
        <div className="display">
          <span className="previusOperation">
            {total}
            {' '}
            {operation}
            {' '}
            {next}
          </span>
          <p>
            {total}
          </p>
        </div>
      );
    }
    return (
      <div className="display">
        <span className="previusOperation">
          {total}
          {' '}
          {operation}
          {' '}
          {next}
        </span>
        <p>
          {next}
        </p>
      </div>
    );
  }
}

Display.defaultProps = {
  total: null,
  next: null,
  operation: null,
};

Display.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
};

export default Display;

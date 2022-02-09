import React from 'react';

import PropTypes from 'prop-types';

// As required for this project, components will be defined class based

// eslint-disable-next-line react/prefer-stateless-function
class Display extends React.Component {
  render() {
    const { total, next } = this.props;

    if (!next && !total) {
      return <p> 0 </p>;
    }
    if (!next) {
      return (
        <p>
          {total}
        </p>
      );
    }
    return (
      <p>
        {next}
      </p>
    );
  }
}

Display.defaultProps = {
  total: null,
  next: null,
  // operation: null,
};

Display.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
  // operation: PropTypes.string,
};

export default Display;

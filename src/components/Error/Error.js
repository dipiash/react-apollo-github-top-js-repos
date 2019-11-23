import React from 'react';
import PropTypes from 'prop-types';

import cm from './Error.module.css';

export const Error = React.memo(({ text }) => {
  return <div className={cm.Error}>{text}</div>;
});

Error.propTypes = {
  text: PropTypes.any,
};

Error.defaultProps = {
  text: 'Error',
};

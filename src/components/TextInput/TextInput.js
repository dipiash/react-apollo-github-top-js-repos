import React from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';
import cm from './TextInput.module.css';

export const TextInput = ({ className, onChange, ...rest }) => <input className={cn(cm.textInput, className)} onChange={onChange} {...rest} />;

TextInput.propTypes = {
  onChange: PropTypes.func,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

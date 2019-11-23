import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import cm from './Button.module.css';

export const Button = ({ children, className, onClick, ...rest }) => (
  <button className={cn(cm.buttonComponent, className)} onClick={onClick} {...rest}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {},
};

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import cm from './Button.module.css';

export const Button = ({children, classNames, onClick, ...rest} = {onClick: () => {}}) => (
    <button className={cn(cm.buttonComponent, classNames)} onClick={onClick} {...rest}>
        {children}
    </button>
);

Button.propTypes = {
    children: PropTypes.object,
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]),
    onClick: PropTypes.func,
};

Button.defaultProps = {
    onClick: () => {},
};

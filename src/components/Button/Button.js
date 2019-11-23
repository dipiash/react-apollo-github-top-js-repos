import React from 'react';
import cn from 'classnames';
import cm from './Button.module.css';

export const Button = ({children, classNames, onClick, ...rest} = {onClick: () => {}}) => (
    <button className={cn(cm.buttonComponent, classNames)} onClick={onClick} {...rest}>
        {children}
    </button>
);

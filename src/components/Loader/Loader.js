import React from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';
import cm from './Loader.module.css';

export const Loader = ({children, loading, className, ...rest}) => (
    <div className={cm.loader} {...rest}>
        <div className={cn({[cm.loaderText]: true, [cm.loading]: loading}, className)}>
            Loading data ...
        </div>
        {children}
    </div>
);

Loader.propTypes = {
    children: PropTypes.any,
    loading: PropTypes.bool,
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]),
};

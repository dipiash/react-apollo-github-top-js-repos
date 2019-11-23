import React from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';
import cm from './Select.module.css';

export const Select = ({ className, onChange, options, ...rest }) => (
  <select disabled={!options || (options && options.length === 0)} className={cn(cm.select, className)} onChange={onChange} {...rest}>
    {options &&
      options.map(item => (
        <option key={item.key} value={item.key}>
          {item.name}
        </option>
      ))}
  </select>
);

Select.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

Select.defaultProps = {
  onChange: () => {},
};

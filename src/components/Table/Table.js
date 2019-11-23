import React from 'react';
import PropTypes from 'prop-types';

import cm from './Table.module.css';

export const Table = ({ columns, data, error }) => {
  const columnKeys = Object.keys(columns);

  return (
    <div className={cm.table}>
      <div className={cm.thead}>
        <div className={cm.tr}>
          {columnKeys.map(key => (
            <div className={cm.th} key={key}>
              {columns[key]}
            </div>
          ))}
        </div>
      </div>
      <div className={cm.tbody}>
        {error ? error : null}
        {!error && (!data || (data && !data.length)) && <div className={cm.empty}>No data</div>}
        {data.map(item => (
          <div className={cm.tr} key={item.key}>
            {columnKeys.map(key => (
              <div className={cm.td} key={key} data-label={columns[key]}>
                {item[key] || '---'}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

Table.propTypes = {
  columns: PropTypes.object,
  data: PropTypes.array,
  error: PropTypes.any,
};

Table.defaultProps = {
  columns: {},
  data: [],
  error: false,
};

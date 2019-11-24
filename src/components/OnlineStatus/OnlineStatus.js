import React from 'react';
import PropTypes from 'prop-types';

import useOnlineStatus from '@rehooks/online-status';
import { Error } from 'components/Error';

import cm from './OnlineStatus.module.css';

export const OnlineStatus = ({ children }) => {
  const onlineStatus = useOnlineStatus();

  return (
    <>
      {!onlineStatus && (
        <div className={cm.onlineStatus}>
          <Error text="No network connection. Please reload page or enable network connection." />
        </div>
      )}
      {children}
    </>
  );
};

OnlineStatus.propTypes = {
  children: PropTypes.any,
};

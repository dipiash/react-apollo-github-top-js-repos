import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'components/Button';

import cm from './Pagination.module.css';

export const Pagination = ({ onPrevClick, onNextClick, isPrevDisabled, isNextDisabled }) => {
  return (
    <div className={cm.PaginationWrapper}>
      <Button className={cm.responsiveButton} data-testid="button-prev" disabled={isPrevDisabled} onClick={onPrevClick}>
        {'<'} Prev
      </Button>
      <Button className={cm.responsiveButton} data-testid="button-next" disabled={isNextDisabled} onClick={onNextClick}>
        Next {'>'}
      </Button>
    </div>
  );
};

Pagination.propTypes = {
  onPrevClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
  isPrevDisabled: PropTypes.bool,
  isNextDisabled: PropTypes.bool,
};

Pagination.defaultProps = {
  isPrevDisabled: true,
  isNextDisabled: false,
};

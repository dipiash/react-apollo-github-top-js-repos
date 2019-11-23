import React from 'react';

import { TextInput } from 'components/TextInput';
import { LicenseSelect } from '../LicenseSelect';

import cm from './Header.module.css';

export const Header = React.memo(({ setSearchName, setLicense }) => {
  return (
    <div className={cm.header}>
      <div className={cm.headerItem}>
        <label>Search by repo name </label>
        <TextInput
          data-testid="search-by-name"
          className={cm.headerField}
          name="search"
          placeholder="Search by repository name"
          onChange={e => setSearchName(e.target.value)}
        />
      </div>
      <div className={cm.headerItem}>
        <label>License type</label>
        <LicenseSelect className={cm.headerField} onChange={e => setLicense(e.target.value)} />
      </div>
    </div>
  );
});

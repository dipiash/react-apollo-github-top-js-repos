import React from 'react';

import {LicenseSelect} from "../LicenseSelect";

import cm from "./Header.module.css";

export const Header = React.memo(({setLicense}) => {
    return (
        <div className={cm.header}>
            <div className={cm.headerItem}>
                <label>License type</label>
                <LicenseSelect
                    className={cm.headerField}
                    onChange={e => setLicense(e.target.value)}
                />
            </div>
        </div>
    )
});

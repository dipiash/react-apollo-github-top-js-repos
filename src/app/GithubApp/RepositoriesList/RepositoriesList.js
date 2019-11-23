import React from 'react';

import {Loader} from "components/Loader";
import {ListLine} from "./ListLine";

import cm from './RepositoriesList.module.css'
import {Error} from "components/Error";

export const RepositoriesList = ({list, loading, error}) => {
    return (
        <Loader loading={loading} data-testif="repositories-list-loading">
            <div className={cm.itemListHeader}>
                <ListLine
                    name="Name"
                    stars="Stars"
                    license="License"
                    isBold
                />
            </div>

            <div className={cm.itemsList}>
                {error && <Error text="Repositories list loading error."/>}
                {!error && (!list || (list && !list.length)) && <div>Empty List</div>}
                {list && list.map(listItem => (
                    <ListLine
                        key={listItem.id}
                        name={listItem.name}
                        stars={listItem.stars}
                        license={listItem.license || <i>Unlicensed</i>}
                    />
                ))}
            </div>
        </Loader>
    );
};

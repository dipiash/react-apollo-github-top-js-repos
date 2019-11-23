import React from 'react';

import {Select} from 'components/Select';

import {useQuery} from "@apollo/react-hooks";
import {getListLicenses} from 'gql/query'
import {Loader} from 'components/Loader';
import {Error} from 'components/Error';

const firstEmptySelectItem = [{key: 0, name: '--- Not Selected ---'}];

export const LicenseSelect = ({onChange, ...rest}) => {
    const {data, loading, error} = useQuery(getListLicenses);

    if (error) {
        return (
            <Error text="Licenses loading error."/>
        );
    }

    const options = data
        ? firstEmptySelectItem.concat(data.licenses.map(license => ({key: license.key, name: license.name})))
        : [];

    return (
        <Loader data-testid="licenses-select-loading" loading={loading}>
            <Select
                data-testid="licenses-select"
                options={options}
                onChange={onChange}
                {...rest}
            />
        </Loader>
    )
};

import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';

import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import {MockedProvider} from "@apollo/react-testing";

import {Header} from '../index';

import {getListLicenses} from 'gql/query/getListLicenses'
import {wait} from "utils/tests/await";

import licensesListMockDataSuccess from './fixtures/result.success'

const mocks = {
    success: [
        {
            request: {
                query: getListLicenses,
            },
            result: {
                data: licensesListMockDataSuccess
            },
        },
    ],
};

it('success render', async () => {
    const state = {
        name: '',
        license: '',
    };

    const setSearchName = name => state.name = name;
    const setLicense = license => state.license = license;

    const { getByText, getByTestId } = render(
        <MockedProvider mocks={mocks.success}>
            <Header setSearchName={setSearchName} setLicense={setLicense} />
        </MockedProvider>
    );
    expect(getByText('Loading data ...')).toBeTruthy();

    const elementLoading = getByTestId('licenses-select-loading');
    expect(elementLoading.children.length).toBe(2);

    await wait(300);

    // Change value in select element
    const selectElement = getByTestId('licenses-select');
    expect(selectElement).toBeTruthy();
    expect(selectElement.value).toBe('0');

    fireEvent.change(selectElement, {target: {value: 'mit'}});
    expect(selectElement.value).toBe('mit');

    expect(state.license).toBe('mit');

    // Change text in input field
    const inputElement = getByTestId('search-by-name');
    expect(inputElement).toBeTruthy();
    expect(inputElement.value).toBe('');

    fireEvent.change(inputElement, {target: {value: 'react'}});
    expect(inputElement.value).toBe('react');

    expect(state.name).toBe('react');
});

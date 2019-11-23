import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';

import React from 'react';
import {render} from '@testing-library/react';
import {Error} from '../Error';

describe('Error', () => {
    it('Error should be render with default props', () => {
        const {getByText} = render(
            <Error />
        );

        expect(getByText('Error')).toBeTruthy();
    });

    it('Error should be render with text', () => {
        const {getByText} = render(
            <Error text="Text" />
        );

        expect(getByText('Text')).toBeTruthy();
    });

    it('Error should be render with div', () => {
        const {getByText} = render(
            <Error text={<div>Text</div>} />
        );

        expect(getByText('Text')).toBeTruthy();
    });
});

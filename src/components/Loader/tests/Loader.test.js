import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';

import React from 'react';
import {render} from '@testing-library/react';

import {Loader} from '../Loader';

describe('Loader', () => {
    it('Should be render with loading state', () => {
        const {container} = render(
            <Loader loading={true}>
                <div>Text</div>
            </Loader>
        );

        expect(container.firstChild.firstChild).toHaveClass('loading');
    });

    it('Should be render without loading state', () => {
        const {container} = render(
            <Loader loading={false}>
                <div>Text</div>
            </Loader>
        );

        expect(container.firstChild.firstChild).not.toHaveClass('loading');
    });
});

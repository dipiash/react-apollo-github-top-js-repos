import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';

import React from 'react';
import { render } from '@testing-library/react';

import { OnlineStatus } from '../OnlineStatus';

describe('OnlineStatus', () => {
  let onLineGetter = true;

  beforeEach(() => {
    onLineGetter = jest.spyOn(window.navigator, 'onLine', 'get');
  });

  it('is offline', () => {
    onLineGetter.mockReturnValue(false);

    const { getByText } = render(
      <OnlineStatus>
        <div>Text</div>
      </OnlineStatus>,
    );

    expect(getByText('No network connection. Please reload page or enable network connection.')).toBeTruthy();
  });
});

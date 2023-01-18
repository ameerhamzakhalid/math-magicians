import React from 'react';
import { render } from '@testing-library/react';
import KeyOperation from '../components/keyOperation';

describe('KeyOperation', () => {
  it('matches snapshot', () => {
    const clickEvent = jest.fn();
    const { container } = render(<KeyOperation clickEvent={clickEvent} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

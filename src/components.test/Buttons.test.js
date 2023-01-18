import React from 'react';
import { render } from '@testing-library/react';
import Buttons from '../components/Buttons';

describe('Buttons', () => {
  it('should render the button with the correct label', () => {
    const btnLabel = 'Click Me';
    const { getByText } = render(<Buttons btn={btnLabel} id="my-button" clickEvent={() => {}} />);
    const button = getByText(btnLabel);
    expect(button).toBeTruthy();
  });
});

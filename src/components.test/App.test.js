import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import App from '../components/App';

describe('App', () => {
  it('should render the Home component for the "/" route', () => {
    const { getByText } = render(
      <Router initialEntries={['/']}>
        <App />
      </Router>,
    );
    const homePage = getByText('Home');
    expect(homePage).toBeTruthy();
  });
});

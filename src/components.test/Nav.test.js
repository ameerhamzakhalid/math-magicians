import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Nav from '../components/Nav';

describe('Nav', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <Router>
        <Nav />
      </Router>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

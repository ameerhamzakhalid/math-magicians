import renderer from 'react-test-renderer';
import React from 'react';

import Home from '../../components/Home';
import Quote from '../../components/Quote';
import Calculator from '../../components/Calculator';

describe('Render of the webpage', () => {
  test('Render Home component', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Render Quote component', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Render Calculator component', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
